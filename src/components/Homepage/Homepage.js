import { Button, Card, Divider, Input, Image } from 'antd'
import axios from 'axios';
import React, { Component } from 'react'
import Classes from "./Homepage.module.css"

export class Homepage extends Component {

  constructor() {
    super();

    this.state = {
      screenName: "",
      userName: "",
      profilePic: "",
      allUsers: [],
    }
  }


  GetUserDetails = () => {
    let queryId = Number(1)
    let url = `https://backend-tweetmanager.herokuapp.com/api/users/`
    axios.get(url, { headers: { 'Content-Type': 'application/json' } }).then((data) => {
      console.log(data)
    }).error((err) => {
      console.log(err)
    })
  }


  render() {
    const { TextArea } = Input;
    return (
      <div className={Classes.Container}>
        <Card size="large" style={{ width: "50%" }}>
          <div className={Classes.UserProfile}>
            <div className={Classes.UserImage}>
              <Image
                src="https://dubaitrippackages.files.wordpress.com/2017/11/2-imgdinosaurs_base.jpg"
                fallback="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
                width={100}
              />
            </div>
            {/* onclick to get user details from the server */}
            <h2 onClick={this.GetUserDetails}>Get User Details</h2>
            <div>
              <h4 className={Classes.Name}>Hamid Hussain</h4>
              <span className={Classes.Username}>Hamid67</span>
            </div>
          </div>

          <Divider>Tweet</Divider>
          <div className={Classes.Tweetbox}>
            <TextArea
              rows={4}
              placeholder='Write Here...'
              maxLength={255}
            />
            <Button type="primary" style={{ width: "20%" }}>Tweet</Button>
          </div>
        </Card>
      </div>
    )
  }
}

export default Homepage
