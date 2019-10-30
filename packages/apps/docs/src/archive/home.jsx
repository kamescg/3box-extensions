import { Site } from "templates"
import { SEO } from "core"

import {
  Heading,
  Flex,
  Box,
  Absolute,
  Span,
  BackgroundImage,
  Loading,
  Image,
  Paragraph,
  Container,
} from "@horizin/design-system"

const IndexPage = () => (
  <Site>
    {/* <SEO title="Home" /> */}
    <Flex flex={1}>
      <Flex center column flex={3} py={50} minHeight="600px">
        <Box px={200}>
          <Heading xl heavy>
            <Span md thin>
              OUR MISSION
            </Span>
            <br />
            <Span heavy>1 Million Developers</Span>{" "}
          </Heading>
          <Paragraph mt={3}>
            <strong>
              Around the world, Ethereum developers are ushering in radical
              change one keystroke at a time.
            </strong>
          </Paragraph>

          <Paragraph>
            We hope to expand the Ethereum developer family - and to bring that
            family closer together - by providing an interactive and immersive
            space for newbies and veterans alike, to learn, collaborate, share,
            and buidl in a fun and easy manner.
          </Paragraph>

          {/* <EmailSubmit /> */}
        </Box>
      </Flex>

      <Flex
        boxShadow="insetLeftHeavy"
        gradient="blue"
        borderRadius="0 0 0 40px"
        flex={2}
        py={50}
      >
        <BackgroundImage
          borderRadius="0 0 0 40px"
          opacity={0.86}
          ratio={0.35}
          src="https://static.vecteezy.com/system/resources/previews/000/202/998/original/ethereum-currency-illustration-based-on-world-map-background-vector.jpg"
        />
        <Flex center column mt={50} ml={-160} p={30}>
          {/* <BoxLoginCardPledge /> */}
        </Flex>
        <Absolute layout="topRight" mr={155} mt={220}>
          <Loading type="ripple" />
        </Absolute>
        <Absolute layout="topRight" mr={200} mt={420}>
          <Loading type="ripple" />
        </Absolute>
        <Absolute layout="topRight" mr={30} mt={190}>
          <Loading type="ripple" />
        </Absolute>
      </Flex>
    </Flex>

    <Container mt={5}>
      <Flex center column>
        <Heading xxl heavy>
          The Next Internet Revolution
        </Heading>
        <Heading lg thin center>
          Join the movement towards a more free Internet<br/><strong>Web 3 - Built with Ethereum</strong>
        </Heading>
      </Flex>
    </Container>

    <Atom.Container maxWidth={780} mt={5}>
      <Atom.Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis congue magna. Phasellus finibus erat non luctus ultricies. Suspendisse posuere semper faucibus. Aliquam at felis vitae ipsum ultricies laoreet. Sed lacinia hendrerit interdum. Aenean eu dolor metus. Donec a scelerisque ipsum. Integer tincidunt feugiat ultricies. Phasellus venenatis risus non interdum condimentum. Nulla elementum ornare finibus. Nam non iaculis lectus. Duis ac eros at dui elementum porta.
      </Atom.Paragraph>

      <Atom.Paragraph sm>
        Nulla lacinia, orci sit amet ultrices scelerisque, nisi mauris vestibulum velit, at lobortis dui nisi eu nibh. Curabitur consectetur efficitur mauris in convallis. Nullam lobortis mauris at sodales accumsan. Sed vestibulum euismod ipsum, eu congue nulla feugiat vitae. Integer at fermentum nibh. Aenean venenatis diam at finibus fermentum. Phasellus fringilla scelerisque nunc ut pulvinar. Pellentesque maximus pharetra porttitor. Donec nec porta nulla, quis venenatis neque. Duis varius massa porttitor ex semper, sit amet dapibus mauris rutrum.
      </Atom.Paragraph>

      <Atom.Paragraph sm>
        In vulputate tellus in metus ornare vulputate. Etiam in nisl eu lectus consectetur iaculis. Sed pretium sit amet arcu a ultricies. Nullam vel aliquam nunc. Donec augue tellus, volutpat at feugiat mollis, efficitur a orci. Aenean viverra ligula nulla, ac laoreet libero cursus sit amet. Cras ac dui id nisi feugiat blandit pellentesque in sem. Morbi tincidunt neque eget nisi tempus tempus. Nulla malesuada, nisi in mollis volutpat, urna mi ultrices libero, non fermentum metus ante auctor eros. Nullam a facilisis felis.
      </Atom.Paragraph>
    </Atom.Container>

    <A.Container>
      <A.Flex alignCenter flex={1} minHeight={370}>
        <A.Flex column flex={1} textRight>
          <A.Heading xl>The Internet of Value</A.Heading>
          <A.Heading md thin>
            A New Layer of the Internet
          </A.Heading>
          <A.Paragraph>
            Why are so many people convinced that Ethereum is the "as big of an
            invention as the internet"? Why have so many intelligent people
            dropped whatever they were previously doing, and decided to focus
            the entirety of their attention on Ethereum?
          </A.Paragraph>
          <A.Link to="/features/developer-identity">
            {/* These "Learn More" buttons should bring people to the next section of the website, which includes the "holy shit" moment platforms*/}
            <A.Button>Learn More</A.Button>
          </A.Link>
        </A.Flex>
        <A.Flex center column flex={1} p={5}>
          <A.Image
            card
            borderRadius={30}
            p={1}
            src="https://imgur.com/0m2yY82.png"
          />
        </A.Flex>
      </A.Flex>
    </A.Container>

    <A.Container>
      <A.Flex alignCenter flex={1} minHeight={370}>
        <A.Flex column flex={1} order={2}>
          <A.Heading xl>Decentralization & Disintermediation</A.Heading>
          <A.Heading md thin>
            A Redistribution of Power and Wealth
          </A.Heading>
          <A.Paragraph>
            Current intermediaries extract a disproportionate amount of value
            from the value chain. Current incumbents maintain a disproportionate
            amount of power over their respective domains. Find out how Ethereum
            can help solve this pressing issue.
          </A.Paragraph>
          <A.Link to="/features/learning-network">
            <A.Button>Learn More</A.Button>
          </A.Link>
        </A.Flex>

        <A.Flex center column flex={1} p={5} order={1}>
          <A.Image
            card
            borderRadius={30}
            p={1}
            src="https://i.imgur.com/sVfZX9l.png"
          />
        </A.Flex>
      </A.Flex>
    </A.Container>

    <A.Container>
      <A.Flex alignCenter flex={1} minHeight={370}>
        <A.Flex column flex={1} textRight>
          <A.Heading xl>Composability</A.Heading>
          <A.Heading md thin>
            A Cooperative Network
          </A.Heading>
          <A.Paragraph>
            What if your work could be seen and leveraged by an entire
            community? What if you could be rewarded and recognized for your
            open-source contributions? What if everything you built MATTERED to
            everyone else, in a very significant way?
          </A.Paragraph>
          <A.Link to="/features/learning-network">
            <A.Button>Learn More</A.Button>
          </A.Link>
        </A.Flex>
        <A.Flex center column flex={1} p={5}>
          <A.Image
            card
            borderRadius={30}
            p={1}
            src="https://i.imgur.com/HsdO37W.png"
          />
        </A.Flex>
      </A.Flex>
    </A.Container>

    <A.Box color="white" gradient="blueDark" py={4}>
      <Heading xxl heavy alignCenter>
        Discover your "holy shit" moment
      </Heading>
      <A.Container>
        <A.Flex alignCenter flex={1} minHeight={370}>
          <A.Flex center column flex={1} p={5}>
            <A.Box width="130%" left="-30%">
              <A.Image
                card
                boxShadow="blueBottom"
                borderRadius={10}
                p={1}
                src="https://i.imgur.com/XmLfVL6.png"
              />
            </A.Box>
          </A.Flex>
          <A.Flex column flex={1}>
            <A.Heading md>Featured Platform</A.Heading>
            <A.Heading xxl heavy>
              Gitcoin Quests
            </A.Heading>
            <A.Paragraph>
              Gitcoin Quests is a fun, gamified way to learn about the web3
              ecosystem, compete with your friends, earn rewards, and level up
              your decentralization-fu!
            </A.Paragraph>
            <A.Link to="/features/learning-network">
              <A.Button>Start Questing</A.Button>
            </A.Link>
          </A.Flex>
        </A.Flex>
      </A.Container>
    </A.Box>

    <QuestPlaform />
  </Site>
)

const QuestPlaform = props => {
  return (
    <>
      <Container mt={6}>
        <Flex center column>
          <Heading xxl heavy>
            EthQuest Platform
          </Heading>
          <Heading lg thin>
            Publish to the Open Quest Network with any Ethereum Account
          </Heading>
        </Flex>
      </Container>

      <A.Container>
        <A.Flex alignCenter flex={1} minHeight={370}>
          <A.Flex column flex={1} textRight>
            <A.Heading xl>Reach New Developers</A.Heading>
            <A.Heading md thin>
              Teach New Users about Your Smart Contract Application
            </A.Heading>
            <A.Paragraph>
              Do you want an interesting way to teach developers how to
              integrate with your smart contract application? The Open Quest
              Network let's you easily publish new developer adventures in just
              a couple of minutes.
            </A.Paragraph>
            <A.Link to="/features/developer-identity">
              <A.Button>Learn More</A.Button>
            </A.Link>
          </A.Flex>
          <A.Flex center column flex={1} p={5}>
            <A.Image
              card
              borderRadius={30}
              p={1}
              src="https://i.imgur.com/ec6dbqa.png"
            />
          </A.Flex>
        </A.Flex>
      </A.Container>

      <A.Container>
        <A.Flex alignCenter flex={1} minHeight={370}>
          <A.Flex column flex={1} order={2}>
            <A.Heading xl>Grow Your Application</A.Heading>
            <A.Heading md thin>
              Get Developers Started with Best Practices
            </A.Heading>
            <A.Paragraph>
              Teach new developers how to properly interact with your smart
              contracts. An easy step-by-step process exposes developers to the
              right information at the right time.{" "}
              <strong>
                Just add your content. Plugin the smart contract addresses and
                that's it.
              </strong>
            </A.Paragraph>
            <A.Link to="/features/learning-network">
              <A.Button>Learn More</A.Button>
            </A.Link>
          </A.Flex>

          <A.Flex center column flex={1} p={5} order={1}>
            <A.Image
              card
              borderRadius={30}
              p={1}
              src="https://i.imgur.com/1KPhWNe.png"
            />
          </A.Flex>
        </A.Flex>
      </A.Container>

      <A.Container>
        <A.Flex alignCenter flex={1} minHeight={370}>
          <A.Flex column flex={1} textRight>
            <A.Heading xl>Activity & Reputation</A.Heading>
            <A.Heading md thin>
              Showcase Your Development Activity - Get Found and Hired
            </A.Heading>
            <A.Paragraph>
              Earn bragging rights or land your next job the Ethereum blockchain
              space. Let your developer activity feed do the talking. Plus share
              your industry knolwedge and reputation with others.
            </A.Paragraph>
            <A.Link to="/features/learning-network">
              <A.Button>Learn More</A.Button>
            </A.Link>
          </A.Flex>
          <A.Flex center column flex={1} p={5}>
            <A.Image
              card
              borderRadius={30}
              p={1}
              src="https://i.imgur.com/6EIoF56.png"
            />
          </A.Flex>
        </A.Flex>
      </A.Container>
    </>
  )
}

export default IndexPage
