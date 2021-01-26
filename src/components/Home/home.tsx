import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import React from "react";
import Loader from "react-loader-spinner";
import { profileResult } from "../../constants/profile-result";
import { fakeUser } from "../../constants/user-info";
import { LinkedInInfo } from "../../models/linkedin-info";
import Export from "../Export";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import Match from "../Match";
import Reach from "../Reach";
import Tabs from "../Tabs";
import UserProfile from "../UserProfile/UserProfile";
import "./home.scss";

interface Props {}
interface State extends LinkedInInfo {
  selectedTab: number;
}

export class Home extends React.Component<Props, State> {
  readonly darkTheme = createMuiTheme({
    palette: {
      type: "dark"
    },
    props: {
      MuiTextField: {
        variant: "outlined",
        size: "small"
      }
    }
  });

  state = {} as State;

  public componentDidMount() {
    this.getTestPdf();
  }

  onClickTab = (index: number) => {
    this.setState({ selectedTab: index });
  };

  render() {
    const selectedTab = this.state.selectedTab;

    let linkedInfo: LinkedInInfo;
    linkedInfo = {
      id: fakeUser.id,
      name: fakeUser.name,
      url: fakeUser.url,
      image: fakeUser.image,
      position: fakeUser.position,
      address: fakeUser.address,
      contactInfo: {
        birthDateOn: { day: 10, month: 10 },
        emailAddress: fakeUser.email,
        ims: [{ id: "wassim-azirar", provider: "skype" }],
        phoneNumbers: [{ number: fakeUser.phone, type: "Mobile" }],
        twitterHandles: [{ name: fakeUser.twitterId, credentialId: "abc123" }],
        primaryTwitterHandle: { name: fakeUser.twitterId, credentialId: "abc123" },
        websites: [{ type: { category: "Pro" }, url: "www.azirar.com" }]
      },
      pdfUrl: "unknown",
      parsedResume: this.state.parsedResume
    };

    return (
      <>
        {this.state.parsedResume ? (
          <>
            <div className="FullSpace">
              <div className="HeaderMenuSpace">
                <HeaderMenu showHome={this.onClickTab} />
              </div>
              <ThemeProvider theme={this.darkTheme}>
                <div className="app">
                  {selectedTab === 0 ? <UserProfile {...linkedInfo} /> : selectedTab === 1 ? <Match /> : selectedTab === 2 ? <Reach /> : <Export />}
                </div>
              </ThemeProvider>
              <Tabs selectedTab={selectedTab} onChange={this.onClickTab} />
            </div>
          </>
        ) : (
          <div className="loader">
            <Loader type="Grid" color="#fc5185" height={150} width={150} />
          </div>
        )}
      </>
    );
  }

  private async getTestPdf() {
    const result = profileResult;

    setTimeout(() => {
      this.setState({ ...{ selectedTab: 0, parsedResume: result } });
    }, 2000);
  }
}
