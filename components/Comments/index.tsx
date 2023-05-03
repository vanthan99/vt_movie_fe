import { pageStyles } from "@/styles/styles.config";
import { Comment } from "@ant-design/compatible";
import { Avatar, Button, Col, Form, Input, List, Row, Tooltip } from "antd";
import { useState } from "react";
import styled from "styled-components";

const Comments = () => {
  const Author = styled.p`
    color: ${pageStyles.textColor} !important;
    margin-bottom: 0;
    font-size: 1rem;
    `

  const Datetime = styled(Tooltip)`
    color: ${pageStyles.textColor};
    `

  const Reply = styled.span`
    color: ${pageStyles.textColor} !important;
    `

  const [data, setData] = useState([
    {
      actions: [<Reply>Reply</Reply>],
      author: (<Author>Han Solo3</Author>),
      avatar: (<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="Han Solo" />),
      content: (
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure), to help people create their product prototypes beautifully and
          efficiently.
        </p>
      ),
      datetime: (
        <Tooltip title="2016-11-22 11:22:33">
          <Datetime>9 hours ago</Datetime>
        </Tooltip>
      ),
    },
    {
      actions: [<Reply>Reply</Reply>],
      author: (<Author>Han Solo2</Author>),
      avatar: (<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="Han Solo" />),
      content: (
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure), to help people create their product prototypes beautifully and
          efficiently.
        </p>
      ),
      datetime: (
        <Tooltip title="2016-11-22 10:22:33">
          <Datetime>9 hours ago</Datetime>
        </Tooltip>
      ),
    },
  ])

  const { TextArea } = Input;


  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = () => {
    console.log('call in handlesubmit');
    
    console.log(submitting);

    setSubmitting(true);
    console.log(submitting);
    
    setTimeout(() => {
      setSubmitting(false);
      setData(item => [...item, {
        actions: [<Reply>Reply</Reply>],
        author: (<Author>Han Solo1</Author>),
        avatar: (<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="Han Solo" />),
        content: (
          <p>
            We supply a series of design principles, practical patterns and high quality design
            resources (Sketch and Axure), to help people create their product prototypes beautifully and
            efficiently.
          </p>
        ),
        datetime: (
          <Tooltip title="2016-11-22 10:22:33">
            <Datetime>9 hours ago</Datetime>
          </Tooltip>
        ),
      }])
    }, 1000);
  };

const onFinish = (values: any) => {
  handleSubmit();
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
  return (
    <CommentsWrapper>
      <ListComment>
        <List
          className="comment-list"
          header={<ListHeader>Comments({data.length})</ListHeader>}
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item,index) => (
            <li key={index}>
              <StyledComment
                actions={item.actions}
                author={item.author}
                avatar={item.avatar}
                content={item.content}
                datetime={item.datetime}
              />
            </li>
          )}
        />
      </ListComment>

      <WriteComment>
        <WriteCommentTitle>Leave Reply</WriteCommentTitle>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
          
        >
          <Row gutter={32}>
            <Col span={12}>
              <Form.Item
                label="Nickname"
                name="nickname"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Email Address"
                name="email"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          
          
          <Form.Item
            label="Write a message"
            name="message"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <TextArea rows={7}/>
          </Form.Item>

          <Form.Item>
            <StyledButton loading={submitting} type="primary" htmlType="submit">
              Submit
            </StyledButton>
          </Form.Item>
        </Form>
      </WriteComment>
    </CommentsWrapper>
  );
}

const StyledButton = styled(Button)`
background-color: ${pageStyles.activeColor};
border-radius: 1rem;
&:hover {
    background-color: ${pageStyles.activeColor} !important;
}
`

const WriteCommentTitle = styled.h3`

`

const WriteComment = styled.div`
margin-top: 3rem;
  .ant-comment {
    background-color: transparent;
  }

  input,textarea {
    background-color: ${pageStyles.backgoundColor};
    border-color: ${pageStyles.textColor2};
    color: ${pageStyles.textColor};
   }

  label {
    color: ${pageStyles.textColor} !important;
   }
`

const ListComment = styled.div`

`

const ListHeader = styled.div`
  color: ${pageStyles.textColor};
`

const StyledComment = styled(Comment)`
  background-color: transparent;
  color: white;

  .ant-comment-content {
    background-color: ${pageStyles.backgoundColor};
    padding: 1rem 3rem;
  }
`


const CommentsWrapper = styled.div`
  background-color: ${pageStyles.textColor2};
  padding: 3rem 4rem;
`

export default Comments;