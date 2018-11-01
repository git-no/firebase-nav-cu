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
      buildNo: "1010",
      kbNo: "1",
      link: "http://link",
      releaseDate: "Feb 2018",
      title: "NAV 10 Cumulative Update 1",
      version: "10"
    },
    {
      id: "2",
      buildNo: "1010",
      kbNo: "1",
      link: "http://link",
      releaseDate: "Feb 2018",
      title: "NAV 10 Cumulative Update 2",
      version: "10"
    },
    {
      id: "3",
      buildNo: "1111",
      kbNo: "1",
      link: "http://link",
      releaseDate: "Feb 2018",
      title: "NAV 11 Cumulative Update 1",
      version: "11"
    }
  ],

  Localizations: [
    {
      id: "DE",
      downloadLink: "http://blabla",
      update: "1"
    },
    {
      id: "EN",
      downloadLink: "http://blabla",
      update: "1"
    },
    {
      id: "EN",
      downloadLink: "http://blabla",
      update: "2"
    }
  ]
};

// Version
export function findVersions() {
  return data.Versions;
}

export function findVersionOfID(id: String) {
  return id == null
    ? data.Versions
    : data.Versions.find(version => version.id == id);
}

// // Cumulated Updates
export function findUpdateOfVersion(parentID: String, id: String) {
  return id == null
    ? data.Updates.filter(update => update.version == parentID)
    : data.Updates.filter(
        update => update.version == parentID && update.id == id
      );
}

export function findLocalizationOfUpdate(parentID: String, id: String) {
  return id == null
    ? data.Localizations.filter(localization => localization.update == parentID)
    : data.Localizations.filter(
        localization => localization.update == parentID && localization.id == id
      );
}
