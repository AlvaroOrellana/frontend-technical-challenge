import { PODCAST_LIST_URL } from "@Constants/index";
import { useEffect, useState } from "react";
import { PodcastDataType } from "types";

interface IPodcastList {
  feed: {
    entry: PodcastDataType[];
    [key: string]: any;
  };
}

const usePodcastList = () => {
  const [podcastList, setPodcastList] = useState<IPodcastList>();

  useEffect(() => {
    const fetchPodcastList = () => {
      fetch(PODCAST_LIST_URL).then(async (response) => {
        setPodcastList(await response.json());
      });
    };
    fetchPodcastList();
  }, [podcastList?.feed.entry]);
  return podcastList?.feed.entry;
};

export default usePodcastList;
