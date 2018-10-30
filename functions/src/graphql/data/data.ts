import { isNull } from "util";

export const data = {
  Versions: [
    {
      id: "10",
      title: "MS Dynamics NAV 2017",
      link: "http://link"
    },
    {
      id: "11",
      title: "MS Dynamics NAV 2018",
      link: "http://link"
    }
  ],
  Updates: [
    {
      id: "1",
      version: "10",
      build: "1010",
      title: "NAV 10 Cumulative Update 1",
      link: "http://link"
    },
    {
      id: "2",
      version: "10",
      build: "1010",
      title: "NAV 10 Cumulative Update 2",
      link: "http://link"
    },
    {
      id: "3",
      version: "11",
      build: "1111",
      title: "NAV 11 Cumulative Update 1",
      link: "http://link"
    }
  ],

  Locations: [
    {
      id: "DE",
      update: "1",
      downloadLink: "http://blabla"
    },
    {
      id: "EN",
      update: "1",
      downloadLink: "http://blabla"
    },
    {
      id: "EN",
      update: "2",
      downloadLink: "http://blabla"
    }
  ]
};

// Version
export function findVersions() {
  return data.Versions;
}

export function findVersionOfID(id: String) {
  return data.Versions.find(version => version.id == id);
}

// Cumulated Updates
export function findUpdatesOfVersion(parentID: String, id: String) {
  if (id === undefined || isNull(id)) {
    return data.Updates.filter(update => update.version == parentID);
  } else {
    return data.Updates.filter(
      update => update.version == parentID && update.id == id
    );
  }
}

export function findLocationOfUpdate(parentID: String, id: String) {
  if (id === undefined || isNull(id)) {
    return data.Locations.filter(location => location.update == parentID);
  } else {
    return data.Locations.filter(
      location => location.update == parentID && location.id == id
    );
  }
}
