import { useEffect, useState, useRef } from "react";

import { List, Icon, Divider, Accordion, Menu, Form } from "semantic-ui-react";

const bigCategoryStyleObj = {
  padding: 0,
  // margin: 10,
  fontSize: 14,
  color: "#808B96",
  // borderwidth: "2px",
  // borderStyle: "dashed",
};

const midCategoryStyleObj = {
  fontSize: 12,
  color: "#808B96",
  fontWeight: "normal",
  // borderwidth: "2px",
  // borderStyle: "dashed",
};

const smCategoryStyleObj = {
  paddingTop: 5,
  // margin: 10,
  fontSize: 12,
  color: "#808B96",
  // borderwidth: "2px",
  // borderStyle: "dashed",
};

const SideMenu = () => {
  const [activeIndex, setActiveIndex] = useState(false);

  const handleAccordianClick = () => {
    console.log(activeIndex);

    setActiveIndex(activeIndex ? false : true);
  };

  return (
    <>

      <List>
        <List.Item>
          <List.Icon name="box" />
          <List.Content>
            <List.Header style={bigCategoryStyleObj}>
              메뉴 1
            </List.Header>
            <List.List>
              <List.Item>
                <List.Content>
                  <List.Header style={midCategoryStyleObj}>
                    메뉴 1-1
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header style={midCategoryStyleObj}>
                    메뉴 1-2
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header style={midCategoryStyleObj}>
                    메뉴 1-3
                  </List.Header>
                </List.Content>
              </List.Item>
            </List.List>
          </List.Content>
        </List.Item>
      </List>

      <Divider />


      <List>
        <List.Item>
          <List.Icon name="box" />
          <List.Content>
            <List.Header style={bigCategoryStyleObj}>
              메뉴 1
            </List.Header>
            <List.List>
              <List.Item>
                <List.Content>
                  <List.Header style={midCategoryStyleObj}>
                    메뉴 1-1
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header style={midCategoryStyleObj}>
                    메뉴 1-2
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header style={midCategoryStyleObj}>
                    메뉴 1-3
                  </List.Header>
                </List.Content>
              </List.Item>
            </List.List>
          </List.Content>
        </List.Item>
      </List>

    </>

  );
};

export default SideMenu;
