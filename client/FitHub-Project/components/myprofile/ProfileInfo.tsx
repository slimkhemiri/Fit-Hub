import React, {useState ,useEffect} from "react";
import {  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView} from "react-native";
import axios from "axios";
import { Avatar } from "react-native-paper";
import tw from "tailwind-react-native-classnames";
import { Text, View } from "../../components/Themed";
import { Profile } from "./interface";
const ProfileInfo = () => {
  const seemoreinfo = [<TouchableOpacity style={{ marginLeft: 30, alignItems: "center" }}>
  <View
    style={{
      alignItems: "center",
      marginTop: 20,
      backgroundColor: "white",
      width: "80%",
      height: "auto",
      flexDirection: "row",
    }}
  >
    <Image
      style={{ height: 25, width: 25 }}
      source={require("../../assets/Icons/bmi.png")}
    ></Image>
    <View
      style={{
        backgroundColor: "transparent",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Text style={tw` ml-6  text-black`}>Skinny</Text>
      <Text style={tw` ml-7 mt-1 text-xs  text-gray-500`}>
        BMI
      </Text>
    </View>
  </View>

</TouchableOpacity>,      


<TouchableOpacity style={{ marginLeft: 30, alignItems: "center" }}>
              <View
                style={{
                  alignItems: "center",
                  marginTop: 20,
                  backgroundColor: "white",
                  width: "80%",
                  height: "auto",
                  flexDirection: "row",
                }}
              >
                <Image
                  style={{ height: 25, width: 25 }}
                  source={require("../../assets/Icons/weight.png")}
                ></Image>
                <View
                  style={{
                    backgroundColor: "transparent",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Text style={tw` ml-6  text-black`}>50 KG</Text>
                  <Text style={tw` ml-7 mt-1 text-xs  text-gray-500`}>
                    Weight
                  </Text>
                </View>
              </View>
          
            </TouchableOpacity>,
            <TouchableOpacity style={{ marginLeft: 30, alignItems: "center" }}>
            <View
              style={{
                alignItems: "center",
                marginTop: 20,
                backgroundColor: "white",
                width: "80%",
                height: "auto",
                flexDirection: "row",
              }}
            >
              <Image
                style={{ height: 25, width: 25 }}
                source={require("../../assets/Icons/height.png")}
              ></Image>
              <View
                style={{
                  backgroundColor: "transparent",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <Text style={tw` ml-6  text-black`}>1.12 M</Text>
                <Text style={tw` ml-7 mt-1 text-xs  text-gray-500`}>
                  Height
                </Text>
              </View>
            </View>
          
          </TouchableOpacity>,
          <TouchableOpacity style={{ marginLeft: 30, alignItems: "center" }}>
          <View
            style={{
              alignItems: "center",
              marginTop: 20,
              backgroundColor: "white",
              width: "80%",
              height: "auto",
              flexDirection: "row",
            }}
          >
            <Image
              style={{ height: 25, width: 25 }}
              source={require("../../assets/Icons/age.png")}
            ></Image>
            <View
              style={{
                backgroundColor: "transparent",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <Text style={tw` ml-6  text-black`}>22</Text>
              <Text style={tw` ml-7 mt-1 text-xs  text-gray-500`}>
               Age
              </Text>
            </View>
          </View>
        
        </TouchableOpacity>]
            const [verif,setVerif] :any= useState(false)
            const [see , setSee] : any = useState("See More")

    const [ProfileData, setProfileData] = useState<Profile[]>([]);

    const userId = 0;
    useEffect(()=>{
        axios.get(`http://localhost:5000/users${userId}`,{
        }).then((res)=>
        setProfileData(res.data)
        
        )
        .catch((err)=>console.log(err)
        )
    },[]) 
    

    return (
      <SafeAreaView>
      <ScrollView>
        <View style={tw` h-full w-full bg-white  items-center`}>
          <View
            style={{
              width: "100%",
              alignItems: "center",
              height: 310,
              backgroundColor: "black",
            }}
          >

            <TouchableOpacity>
              <Avatar.Image
                size={150}
                style={{
                  marginTop: 60,
                  borderColor: "#36e08b",
                  borderWidth: 1,
                }}
                source={require("../../assets/images/coach.png")}
              ></Avatar.Image>
            </TouchableOpacity>
            <View style={tw`mt-4 bg-transparent  flex-row`}>
              <Text style={tw`text-white text-base font-bold `}>
                {" "}
               DESCRIPTION{" "}
              </Text>
            </View>
            <View style={tw`mt-4 bg-transparent flex-row`}>
              <Image
                style={tw`w-4 h-4`}
                source={require("../../assets/Icons/plasa.png")}
              />
              <Text style={tw` pl-2 text-white font-bold `}> ADDRESS </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "transparent",
              alignItems: "center",
              width: "100%",
            }}
          >
            <TouchableOpacity style={{ marginLeft: 30, alignItems: "center" }}>
              <View
                style={{
                  alignItems: "center",
                  marginTop: 20,
                  backgroundColor: "white",
                  width: "80%",
                  height: "auto",
                  flexDirection: "row",
                }}
              >
                <Image
                  style={{ height: 25, width: 25 }}
                  source={require("../../assets/Icons/phone.png")}
                ></Image>
                <View
                  style={{
                    backgroundColor: "transparent",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Text style={tw` ml-6  text-black`}>+216 28 344 175</Text>
                  <Text style={tw` ml-7 mt-1 text-xs  text-gray-500`}>
                    Mobile
                  </Text>
                </View>
              </View>
              <View style={styles.container}>
                <View style={styles.separatorOffset} />
                <View style={styles.separator} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ marginLeft: 30, alignItems: "center" }}>
              <View
                style={{
                  alignItems: "center",
                  marginTop: 20,
                  backgroundColor: "white",
                  width: "80%",
                  height: "auto",
                  flexDirection: "row",
                }}
              >
                <Image
                  style={{ height: 25, width: 25 }}
                  source={require("../../assets/Icons/email.png")}
                ></Image>
                <View
                  style={{
                    backgroundColor: "transparent",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Text style={tw`ml-6  text-black`}>
                    mohamedsalah@gmail.com
                  </Text>
                  <Text style={tw` ml-7 mt-1 text-xs  text-gray-500`}>
                    Personal
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            {verif  && (seemoreinfo[0])}
            {verif && (seemoreinfo[1])}
            {verif  && (seemoreinfo[2])}
            {verif  && (seemoreinfo[3])}
      
            <View style={tw`bg-transparent mt-6`}>
              <TouchableOpacity>
                <Text  onPress={()=>{if(verif=== false){setVerif(true);setSee("Show Less")} else{setVerif(false);setSee("See More")}}} style= {tw`text-black underline`}>{see}</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                alignItems: "center",
                backgroundColor: "transparent",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity style={styles.button}>
                <View
                  style={{
                    alignItems: "center",
                    backgroundColor: "transparent",
                    flexDirection: "row",
                  }}
                >
                  <Image
                    style={tw` mt-3 h-4 w-4`}
                    source={require("../../assets/Icons/edit.png")}
                  />
                  <Text style={tw`pt-3 pl-2  font-bold`}>Edit Profile</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, { marginLeft: 20 }]}>
                <View
                  style={{
                    alignItems: "center",
                    backgroundColor: "transparent",
                    flexDirection: "row",
                  }}
                >
                  <Image
                    style={tw` mt-3 h-4 w-4`}
                    source={require("../../assets/Icons/plus.png")}
                  />
                  <Text style={tw`pt-3 pl-2 font-bold`}>Create Event</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{ width: "100%", backgroundColor: "white" }}>
              <View
                style={{
                  alignItems: "center",
                  flexDirection: "row",
                  backgroundColor: "white",
                }}
              >
                <View
                  style={{
                    marginTop: 40,
                    height: 140,
                    marginLeft: 20,
                    width: 150,
                  }}
                >
                  <Image
                    style={{ height: "100%", width: "100%" }}
                    source={require("../../assets/images/coach.png")}
                  />
                </View>
                <View
                  style={{
                    backgroundColor: "red",
                    marginLeft: 20,
                    marginTop: 40,
                    height: 140,
                    width: 150,
                  }}
                >
                  <Image
                    style={{ height: "100%", width: "100%" }}
                    source={require("../../assets/images/Gym.png")}
                  />
                </View>
              </View>
              <View
                style={{
                  alignItems: "center",
                  flexDirection: "row",
                  backgroundColor: "white",
                }}
              >
                <View
                  style={{
                    marginTop: 40,
                    height: 140,
                    marginLeft: 20,
                    width: 150,
                  }}
                >
                  <Image
                    style={{ height: "100%", width: "100%" }}
                    source={require("../../assets/images/coach.png")}
                  />
                </View>
                <View
                  style={{
                    backgroundColor: "red",
                    marginLeft: 20,
                    marginTop: 40,
                    height: 140,
                    width: 150,
                  }}
                >
                  <Image
                    style={{ height: "100%", width: "100%" }}
                    source={require("../../assets/images/Gym.png")}
                  />
                </View>
              </View>
              <View
                style={{
                  alignItems: "center",
                  flexDirection: "row",
                  backgroundColor: "white",
                }}
              >
                <View
                  style={{
                    marginTop: 40,
                    height: 140,
                    marginLeft: 20,
                    width: 150,
                  }}
                >
                  <Image
                    style={{ height: "100%", width: "100%" }}
                    source={require("../../assets/images/coach.png")}
                  />
                </View>
                <View
                  style={{
                    backgroundColor: "red",
                    marginLeft: 20,
                    marginTop: 40,
                    height: 140,
                    width: 150,
                  }}
                >
                  <Image
                    style={{ height: "100%", width: "100%" }}
                    source={require("../../assets/images/Gym.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
      );
    };
    export default ProfileInfo
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "black",
    width: 120,
    height: 50,
    marginRight: 10,
    opacity: 0.8,
    marginTop: 25,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: 250,
    marginRight: 50,
    marginTop: 20,
  },
  separatorOffset: {
    flex: 2,

    backgroundColor: "transparent",
  },
  separator: {
    borderColor: "#EDEDED",
    borderWidth: 0.8,
    flex: 1000000,
    width: "auto",
    flexDirection: "row",
  },
});