import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import usePodcastList from "./usePodcastList";
import { PodcastDataType, PodcastDetailType } from "types";
import { PODCAST_DETAILS_URL } from "@Constants/index";

const usePodcastDetails = () => {
  const { podcastId } = useParams();
  const podcastList = usePodcastList();

  const [podcastDetails, setPodcastDetails] = useState<PodcastDetailType[]>();
  const [podcastData, setPodcastData] = useState<PodcastDataType>();

  useEffect(() => {
    const fetchPodcastDetails = () => {
      if (podcastId) {
        const fetchUrl = PODCAST_DETAILS_URL.replace("*", podcastId);
        fetch(fetchUrl, { mode: "cors" })
          .then(async (response) => await response.text())
          .then((text: string) =>
            setPodcastDetails(JSON.parse(text).results?.slice(1))
          );
      }
    };
    fetchPodcastDetails();
  }, [podcastId]);

  useEffect(() => {
    setPodcastData(
      podcastList?.find(
        ({ id }: PodcastDataType) => id.attributes["im:id"] === podcastId
      )
    );
  }, [podcastId, podcastList]);

  return { podcastDetails, podcastData };
};

export default usePodcastDetails;
