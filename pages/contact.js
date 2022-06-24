import { Modal, Input, Image, Button, Text, User } from "@nextui-org/react";
import React from "react";
import Head from "next/head";

const Contact = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };
  return (
    <>
      <Head>
        <title>Contact us</title>
      </Head>
      <div className="header-text">
        <Text b size={36}>
          Contact us
        </Text>
      </div>
      <div className="contact-us">
        <Image
          width={640}
          height={360}
          src="/about-us.jpeg"
          alt="User profile"
          objectFit="cover"
        />
        <p>
          The whole world has become a small place today. Any information can be
          exchanged by people in few seconds and that, too, in a proper and
          effective way without any loss of data while it is being processed. On
          the one hand, all these different ways of telecommunication and
          information exchange have highlighted the necessity for multipurpose
          development and growth of information technology and on the other, the
          easy access and use of it has boosted the network of information
          exchange. All this has been possible through information technology
          like telephone, fax, telex, computers, internet, e-mail, photocopier,
          printer, scanner, cellular phones, pagers, videophone, digital camera,
          multimedia, etc.
        </p>
      </div>
      <div className="join-us-button">
        <Button auto color="primary" shadow onClick={handler}>
          Join us
        </Button>
      </div>
      <div className="team-member-container">
        <div className="team-heading">
          <Text b size={18}>
            Our Team Members
          </Text>
        </div>
        <div>
          <User
            bordered
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            name="Ariana Wattson"
            description="UI/UX Designer @Github"
            color="gradient"
            size="xl"
          >
            <User.Link href="https://nextui.org/">@watsonari</User.Link>
          </User>
        </div>
        <div>
          <User
            bordered
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            name="Tony Reichert"
            color="error"
            description="UI/UX Designer @Github"
            size="xl"
          />
        </div>
        <div>
          <User
            bordered
            src="https://i.pravatar.cc/150?u=a092581d4ef9026700d"
            name="Kristen Copper"
            color="warning"
            description="UI/UX Designer @Github"
            size="xl"
          />
        </div>
        <div>
          <User
            bordered
            src="https://i.pravatar.cc/150?u=a048581f4e29026701d"
            name="William Howard"
            color="success"
            description="UI/UX Designer @Github"
            size="xl"
          />
        </div>
      </div>

      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            <Text b size={18}>
              Join Us
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="First Name"
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Last Name"
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto onClick={closeHandler}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Contact;
