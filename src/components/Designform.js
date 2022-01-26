import React from "react";
import { Form, FormGroup, Label, Col, Input, FormFeedback } from "reactstrap";
import FontPicker from "font-picker-react";
const Designform = (props) => {
  return (
    <div className="form">
      <Form>
        <FormGroup row>
          <Col>
            <Label for="MainText">Main Text</Label>
          </Col>
          <Col>
            <Input
              id="MainText"
              name="maintext"
              placeholder="Enter text for First row "
              type="text"
              value={props.mainText}
              onChange={(event) => {
                props.setMainText(event.target.value);
              }}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col>
            <Label for="SecText">Secondary Text</Label>
          </Col>
          <Col sm={10}>
            <Input
              id="SecText"
              name="secText"
              placeholder="Enter text for Second row "
              type="text"
              value={props.secText}
              onChange={(event) => {
                props.setSecText(event.target.value);
              }}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={10}>
            <Label htmlFor="FontColorPicker">Font color: </Label>
          </Col>
          <Col sm={10}>
            <Input
              className="colorPicker"
              type="color"
              id="FontColorPicker"
              name="color"
              onChange={(event) => {
                props.setFontColor(event.target.value);
              }}
              value={props.fontColor}
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col>
            <Label htmlFor="BgColorPicker">Background color: </Label>
          </Col>
          <Col>
            <Input
              className="colorPicker"
              type="color"
              id="BgColorPicker"
              name="color"
              onChange={(event) => {
                props.setBgColor(event.target.value);
              }}
              value={props.bgColor}
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col>
            <Label htmlFor="FontPicker" className="mx-2 px-6">
              Select Font:
            </Label>
          </Col>
          <Col>
            <FontPicker
              className="fontPicker"
              id="FontPicker"
              style={{ backgroundColor: "#fff" }}
              apiKey="AIzaSyADEKKUFLqKr-xeDdve9w6cKZkDYBlLsyg"
              limit="20"
              categories="sans-serif"
              onChange={(nextfont) => {
                props.setActiveFontFamily(nextfont);
              }}
            />
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
};

export default Designform;
