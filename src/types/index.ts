export type PodcastDetailType = {
  contentAdvisoryRating: string;
  trackViewUrl: string;
  artworkUrl60: string;
  feedUrl: string;
  closedCaptioning: string;
  collectionId: number;
  collectionName: string;
  genres: [
    {
      name: string;
      id: string;
    }
  ];
  episodeGuid: string;
  description: string;
  trackId: number;
  trackName: string;
  releaseDate: string;
  artistIds: number[];
  shortDescription: string;
  artworkUrl600: string;
  country: string;
  previewUrl: string;
  collectionViewUrl: string;
  trackTimeMillis: number;
  episodeFileExtension: string;
  artworkUrl160: string;
  episodeUrl: string;
  episodeContentType: string;
  kind: string;
  wrapperType: string;
};

export type PodcastDataType = {
  "im:name": { label: string };
  "im:image": [
    {
      label: string;
      attributes: { height: string };
    },
    {
      label: string;
      attributes: { height: string };
    },
    {
      label: string;
      attributes: { height: string };
    }
  ];
  summary: {
    label: string;
  };
  "im:price": {
    label: string;
    attributes: { amount: string; currency: string };
  };
  "im:contentType": { attributes: { term: string; label: string } };
  rights: { label: string };
  title: { label: string };
  link: {
    attributes: {
      rel: string;
      type: string;
      href: string;
    };
  };
  id: {
    label: string;
    attributes: { "im:id": string };
  };
  "im:artist": { label: string };
  category: {
    attributes: {
      "im:id": string;
      term: string;
      scheme: string;
      label: string;
    };
  };
  "im:releaseDate": {
    label: string;
    attributes: { label: string };
  };
};
