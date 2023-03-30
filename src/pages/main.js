import { useEffect, useState, useRef } from "react";

import { Label, List, Icon, Divider, Accordion, Menu, Input, Form, TextArea, Select, Button, Rating, Checkbox } from "semantic-ui-react";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";


const inter = Inter({ subsets: ["latin"] });

export default function Main() {
  // const [time, setTime] = useState();
  const [sentimentsLevelRange, setSentimentsLevelRange] = useState(1);

  const sentimentsLebelChange = (e) => {
    setSentimentsLevelRange(e.target.value);
  }

  useEffect(() => {
    return () => {
    };
  }, []);

  return (
    <>
      <div
        style={{
          width: "100%",
          border: "1px dashed grey",
        }}
      >

        <div
          style={{
            fontSize: 20,
            paddingBottom: 10,
            width: "100%",
            fontWeight: "bold",
            // border: "5px dashed grey",
          }}
        >
          <Icon name="angle right" />
          Twitter sentence script generator
        </div>


        <div style={{
          width: "100%",
          display: "flex",
          // border: "1px dashed grey",
        }}
        >

          <div style={{
            width: "50%",
            height: "700px",
            padding: 10,
            margin: 10,
            // textAlign: "center",
            verticalAlign: "middle",
            border: "1px dashed grey",
          }}>
            <Form>
              <div>Input basic sentences for Twitter</div>
              <Form.Field
                id='form-textarea-control-opinion'
                control={TextArea}
                placeholder='Input basic sentences for Twitter'
                style={{ minHeight: 200 }}
              />
              <div>Sentiments</div>
              <Form.Field >
                <Label as='a' color="red">
                  <Icon name='heart' />
                  Happy
                </Label>
                <Label as='a' color="red">
                  <Icon name='heart' />
                  Sad
                </Label>
                <Label as='a' color="red">
                  <Icon name='heart' />
                  Sad
                </Label>
                <Label as='a' color="red">
                  <Icon name='heart' />
                  Sad
                </Label>
                <Label as='a' color="red">
                  <Icon name='heart' />
                  Sad
                </Label>
                <Label as='a' color="red">
                  <Icon name='heart' />
                  Sad
                </Label>
              </Form.Field>


              <div>Sentiments Level : {sentimentsLevelRange} </div>
              <Form.Field >
                <input
                  type='range'
                  min={1}
                  max={3}
                  value={sentimentsLevelRange}
                  onChange={sentimentsLebelChange}
                  style={{ width: "100%", color: "orange" }}
                />
                <br />
                <Rating size="huge"
                  icon="heart"
                  rating={sentimentsLevelRange}
                  maxRating={3} style={{ width: "100%" }}
                />
              </Form.Field>

              <div>Tone of Voice </div>
              <Form.Field >
                <Label as='a' color="orange">
                  <Icon name='heart' />
                  Happy
                </Label>
                <Label as='a' color="orange">
                  <Icon name='orange' />
                  Sad
                </Label>
                <Label as='a' color="orange">
                  <Icon name='heart' />
                  Sad
                </Label>
                <Label as='a' color="orange">
                  <Icon name='heart' />
                  Sad
                </Label>
                <Label as='a' color="orange">
                  <Icon name='heart' />
                  Sad
                </Label>
                <Label as='a' color="orange">
                  <Icon name='heart' />
                  Sad
                </Label>
              </Form.Field>

              <Divider />

              <Form.Field >
                <Button positive size="Large" icon fluid> <Icon name='check' /> Create the script </Button>
              </Form.Field>
            </Form>

          </div>

          <div style={{
            width: "50%",
            height: "700px",
            padding: 10,
            margin: 10,
            // textAlign: "center",
            border: "1px dashed grey",
          }}>

            <Form>
              <div>All Suggestions </div>

              {/* <Form.Field
                control={Checkbox}
                label='I agree to the Terms and Conditions'
              /> */}
              <Form.Field
                id='form-textarea-control-opinion'
                control={TextArea}
                placeholder='..'
                style={{ minHeight: 150 }}
              />
              <Form.Field >
                <Button icon> <Icon name='copy' /> copy </Button>
                <Button icon> <Icon name='location arrow' /> posting </Button>
              </Form.Field>

              <Form.Field
                id='form-textarea-control-opinion'
                control={TextArea}
                placeholder='..'
                style={{ minHeight: 150 }}
              />
              <Form.Field >
                <Button icon> <Icon name='copy' /> copy </Button>
                <Button icon> <Icon name='location arrow' /> posting </Button>
              </Form.Field>

              <Form.Field
                id='form-textarea-control-opinion'
                control={TextArea}
                placeholder='..'
                style={{ minHeight: 150 }}
              />
              <Form.Field >
                <Button icon> <Icon name='copy' /> copy </Button>
                <Button icon> <Icon name='location arrow' /> posting </Button>
              </Form.Field>


            </Form>

          </div>

        </div>
      </div>



    </>
  );
}


Main.getInitialProps = async (ctx) => {
  const pathname = ctx.pathname;

  return { pathname };
};
