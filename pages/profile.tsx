import React from "react";
import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Link from "next/link";
import { Typography } from "@material-ui/core";
import { GITHUB_URL } from "../lib/constants";
import Avatar from "../components/avatar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 700,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    nestedSecond: {
      paddingLeft: theme.spacing(8),
    },
  })
);

const Profile: React.FC = () => {
  const classes = useStyles();
  const [openLanguage, setOpenLanguage] = React.useState(false);
  const [openDB, setOpenDB] = React.useState(false);
  const [openFrameWorkServer, setOpenFrameWorkServer] = React.useState(false);
  const [openFrameWorkFront, setOpenFrameWorkFront] = React.useState(false);
  const [openCloud, setOpenCloud] = React.useState(false);

  const handleClickLanguage = () => {
    setOpenLanguage(!openLanguage);
  };

  const handleClickDB = () => {
    setOpenDB(!openDB);
  };

  const handleClickFrameWorkServer = () => {
    setOpenFrameWorkServer(!openFrameWorkServer);
  };

  const handleClickFrameWorkFront = () => {
    setOpenFrameWorkFront(!openFrameWorkFront);
  };

  const handleClickCloud = () => {
    setOpenCloud(!openCloud);
  };

  return (
    <>
      <Layout>
        <Head>
          <title>Naoto Aburada Profile</title>
        </Head>
        <Container>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
          >
            <ListItem>
              <ListItemIcon>
                <Typography variant="h5">自己紹介</Typography>
              </ListItemIcon>
            </ListItem>
            <Collapse in={true}>
              <List component="div" disablePadding>
                <ListItem className={classes.nested}>
                  <ListItemText>
                    新卒からどちらかというとインフラ関係をメインに仕事をしてきた。
                    <br />
                    最近、フロントエンド側の技術に興味をもち、勉強を始めたエンジニア。
                    <br />
                    日々感じたことや学んだことを少しずつブログにしていきます。
                  </ListItemText>
                </ListItem>
              </List>
            </Collapse>

            <ListItem>
              <ListItemIcon>
                <Typography variant="h5">GitHub</Typography>
              </ListItemIcon>
            </ListItem>
            <Collapse in={true}>
              <List component="div" disablePadding>
                <ListItem className={classes.nested}>
                  <ListItemText>
                    <a href={`${GITHUB_URL}`} target="_blank">
                      <Avatar
                        name="@NaotoAburada"
                        picture="/assets/blog/profile/github.jpeg"
                      />
                    </a>
                  </ListItemText>
                </ListItem>
              </List>
            </Collapse>

            <ListItem>
              <ListItemIcon>
                <Typography variant="h5">出身地</Typography>
              </ListItemIcon>
            </ListItem>
            <Collapse in={true}>
              <List component="div" disablePadding>
                <ListItem className={classes.nested}>
                  <ListItemText>かごんま</ListItemText>
                </ListItem>
              </List>
            </Collapse>

            <ListItem>
              <ListItemIcon>
                <Typography variant="h5">血液型</Typography>
              </ListItemIcon>
            </ListItem>
            <Collapse in={true}>
              <List component="div" disablePadding>
                <ListItem className={classes.nested}>
                  <ListItemText>O型</ListItemText>
                </ListItem>
              </List>
            </Collapse>

            <ListItem>
              <ListItemIcon>
                <Typography variant="h5">好きなもの</Typography>
              </ListItemIcon>
            </ListItem>
            <Collapse in={true}>
              <List component="div" disablePadding>
                <ListItem className={classes.nested}>
                  <ListItemText>
                    ラブライブ（話をしてあげると喜びます）、22/7
                  </ListItemText>
                </ListItem>
              </List>
            </Collapse>

            <ListItem>
              <ListItemIcon>
                <Typography variant="h5">スキル一覧</Typography>
              </ListItemIcon>
            </ListItem>
            <ListItem button onClick={handleClickLanguage}>
              <ListItemIcon className={classes.nested}>
                <Typography variant="h6">言語</Typography>
              </ListItemIcon>
              {openLanguage ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openLanguage} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem className={classes.nestedSecond}>
                  <ListItemText>Java（1.6、1.8）</ListItemText>
                </ListItem>
                <ListItem className={classes.nestedSecond}>
                  <ListItemText>JSP</ListItemText>
                </ListItem>
                <ListItem className={classes.nestedSecond}>
                  <ListItemText>JavaScript</ListItemText>
                </ListItem>
                <ListItem className={classes.nestedSecond}>
                  <ListItemText>HTML</ListItemText>
                </ListItem>
                <ListItem className={classes.nestedSecond}>
                  <ListItemText>TypeScript</ListItemText>
                </ListItem>
              </List>
            </Collapse>

            <ListItem button onClick={handleClickDB}>
              <ListItemIcon className={classes.nested}>
                <Typography variant="h6">DB関連</Typography>
              </ListItemIcon>
              {openDB ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openDB} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem className={classes.nestedSecond}>
                  <ListItemText>Oracle</ListItemText>
                </ListItem>
                <ListItem className={classes.nestedSecond}>
                  <ListItemText>PostgreSQL</ListItemText>
                </ListItem>
                <ListItem className={classes.nestedSecond}>
                  <ListItemText>DB2</ListItemText>
                </ListItem>
              </List>
            </Collapse>

            <ListItem button onClick={handleClickFrameWorkServer}>
              <ListItemIcon className={classes.nested}>
                <Typography variant="h6">FrameWork(サーバサイド)</Typography>{" "}
              </ListItemIcon>
              {openFrameWorkServer ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openFrameWorkServer} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem className={classes.nestedSecond}>
                  <ListItemText>Spring</ListItemText>
                </ListItem>
                <ListItem className={classes.nestedSecond}>
                  <ListItemText>MyBatis</ListItemText>
                </ListItem>
                <ListItem className={classes.nestedSecond}>
                  <ListItemText>Justware</ListItemText>
                </ListItem>
              </List>
            </Collapse>

            <ListItem button onClick={handleClickFrameWorkFront}>
              <ListItemIcon className={classes.nested}>
                <Typography variant="h6">FrameWork(フロントエンド)</Typography>{" "}
              </ListItemIcon>
              {openFrameWorkFront ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openFrameWorkFront} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem className={classes.nestedSecond}>
                  <ListItemText>React</ListItemText>
                </ListItem>
                <ListItem className={classes.nestedSecond}>
                  <ListItemText>Next.js</ListItemText>
                </ListItem>
              </List>
            </Collapse>

            <ListItem button onClick={handleClickCloud}>
              <ListItemIcon className={classes.nested}>
                <Typography variant="h6">クラウド</Typography>{" "}
              </ListItemIcon>
              {openCloud ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openCloud} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem className={classes.nestedSecond}>
                  <ListItemText>Azure</ListItemText>
                </ListItem>
              </List>
            </Collapse>
          </List>

          <br />
          <Typography variant="h4">
            <Link href="/">
              <a className="hover:underline">Blog TOPに戻る</a>
            </Link>
          </Typography>
        </Container>
      </Layout>
    </>
  );
};

export default Profile;
