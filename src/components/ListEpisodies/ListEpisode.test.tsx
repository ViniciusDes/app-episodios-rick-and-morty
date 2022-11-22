import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ListEpisodies from ".";
import EpisodeService from "../../services/EpisodeService";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";

describe("<ListEpiside />", () => {
  test("render first and last item of api data", async () => {
    const data = await EpisodeService.getEpisodies();

    await waitFor(() => <ListEpisodies />);

    const firstNameEpisodeInTheDocument = screen.queryByText(
      "Descrição: " + data[0].name
    );
    const lastNameEpisodeInTheDocument = screen.queryByText(
      "Descrição: " + data.at(-1)?.name
    );

    expect(firstNameEpisodeInTheDocument).toBeInTheDocument();
    expect(lastNameEpisodeInTheDocument).toBeInTheDocument();
  });

  test("render items filtered show data", async () => {
    await waitFor(() => <ListEpisodies />);

    const inputFilterEpisodies = screen.getByPlaceholderText("Descrição:");

    // console.log("inputFilterEpisodies", inputFilterEpisodies);
    const listOfEpisodiesFiltered = await EpisodeService.getEpisodies("pi");

    fireEvent.change(inputFilterEpisodies, {
      target: { value: "pi" },
    });

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(() => {});
      }, 2000);
    });

    const numberCardsRendered = screen.getAllByRole("feed").length;
    const numberCardsFiltered = listOfEpisodiesFiltered.length;
    console.log("numberCardsFiltered", numberCardsFiltered);
    expect(numberCardsRendered).toEqual(numberCardsFiltered);
  });

  // test("render ONLY items filtered show data", async () => {
  //   const data = await EpisodeService.getEpisodies("pi");

  //   render(<ListEpisodies listOfEpisodies={data} />);

  //   data.forEach((episode) => {
  //     const nameEpisodeInTheDocument = screen.queryByText(
  //       "Descrição: " + episode.name
  //     );

  //     expect(nameEpisodeInTheDocument).toBeInTheDocument();
  //   });
  // });
});
