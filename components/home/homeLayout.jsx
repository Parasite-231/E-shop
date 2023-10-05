import fetchItemData from "@/pages/api/getAllItems";
import { Card, Col, Row } from "antd";
import { useEffect, useState } from "react";
const HomeLayout = () => {
    const [itemData, setItemData] = useState([]);
    const { Meta } = Card;
  useEffect(() => {
    // Fetch data using the API function
    fetchItemData()
      .then((result) => {
        setItemData(result);
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <Row gutter={16}>
        {itemData.map((item, index) => (
          <Col span={8} key={index}>
            {/* <Card title={item.category} bordered={false}>
              {item.content}
            </Card> */}
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={
                <img
                  alt="example"
                  src={item.image}
                />
              }
            >
              <Meta title={item.category} description={item.content} />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeLayout;
