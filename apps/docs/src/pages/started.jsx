import { Site } from "templates"
import { FormUpdates } from 'core'

export default props =>
<Site>

  <A.Flex gradient='bluePurple' flex={1} >

    <A.BackgroundImage 
      backgroundSize='110%' opacity={.46} ratio={.35}
      src='https://wallpaperaccess.com/full/1267681.jpg' />

    <A.Flex column flex={3} py={50} order={2} p={5} py={7} ml={4} my={5}>
        <A.Box card flex={1} boxShadow={7} maxWidth={620} p={4}>
          <A.Heading xl heavy>Get Started</A.Heading>
          <A.Heading md thin>Interact With the Ethereum Blockchain Today</A.Heading>
          <Atom.Paragraph sm>
            Start interacting with Ethereum technology via the popular developer tools below. Select from the right wallet, build environment and javascript libraries to start your new project today.
          </Atom.Paragraph>
          <A.HorizontalRule dash my={3} />
          <A.Button xs variant='green'>View All Resources</A.Button>
        </A.Box>
    </A.Flex>
  </A.Flex>

  <Atom.Box>
  <Atom.Container maxWidth={1080} py={5}>

  <Atom.Heading lg heavy>Installing The Essentials</Atom.Heading>
    <Atom.Paragraph >
      When developing with any new technology it's always required to setup a few essentials. The Ethereum stack in addition to installing the regular compilers and loaders, also requires a wallet an ETH to interact with the designated network.
    </Atom.Paragraph>

    <WalletSelection />
    <BuildToolsSelection styled={{mt: 4}} />
    <JavscriptSelection styled={{mt: 4}} />

    </Atom.Container>
  </Atom.Box>

  </Site>

const ToolCard = props => { 
  return(
   <Atom.Flex card p={0} column >
     <A.Flex center column gradient='blueDark' flex={1} minHeight={150} py={3}>
       <A.BackgroundImage src={props.imageCover} opacity={.2} />
       <Atom.Flex
            mb={3}
            circle
            column center
            card
            boxShadow={1}
            overflow='hidden'
            p={4}
            >
          <Atom.Span><A.Image
            maxWidth={80}
            borderRadius={10}
            src={props.image}
          /></Atom.Span>
          </Atom.Flex>
     </A.Flex>
     <Atom.Box bg='white' color='charcoal' p={3}>
       <Atom.Heading md heavy>{props.title}</Atom.Heading>
       <Atom.Heading sm thin>{props.tagline}</Atom.Heading>
       <Atom.Paragraph xs>
         {props.summary}
       </Atom.Paragraph>
        <Atom.Flex alignCenter>
          <Atom.Flex
            mb={3}
            circle
            card
            overflow='hidden'
            height={40}
            width={40}
            >
          <A.BackgroundImage
            src={props.imageCreatedBy}
          />
          </Atom.Flex>
          
         <Atom.Heading sm heavy ml={3}>{props.createdBy}</Atom.Heading>
       </Atom.Flex>
       {/* <Atom.Span xxs>Created By</Atom.Span> */}
       <Atom.Flex justifyEnd flex={1}>
         <Atom.Button xs>Go</Atom.Button>
       </Atom.Flex>
     </Atom.Box>
   </Atom.Flex>
 )}


 const WalletSelection = props => { 
  return(
    <Atom.Box {...props.styled}>
      <Atom.Heading lg heavy>Ethereum Wallets</Atom.Heading>
      <Atom.Flex gutter3>
        <ToolCard
          title='MetaMask'
          createdBy='ConsenSys'
          imageCreatedBy='https://miro.medium.com/max/3150/1*HWsBYAT2n833Op1P3T_Osw.png'
          tagline='Browser'
          summary='Nulla malesuada, nisi in mollis volutpat, urna mi ultrices libero, non fermentum metus ante auctor eros. Nullam a facilisis felis.'
          image='https://metamask.io/img/metamask.png'
          imageCover='https://www.ledger.com/wp-content/uploads/2019/06/assets_logo_metamask.jpg'
        />
        <ToolCard
          title='Jax'
          tagline='Smartphone'
          summary='Nulla malesuada, nisi in mollis volutpat, urna mi ultrices libero, non fermentum metus ante auctor eros. Nullam a facilisis felis.'
          image='http://sebfor.com/wp-content/uploads/2019/04/jaxx-wallet-review-2019.png'
        />
        <ToolCard
          title='Trezor'
          tagline='Hardware'
          summary='Nulla malesuada, nisi in mollis volutpat, urna mi ultrices libero, non fermentum metus ante auctor eros. Nullam a facilisis felis.'
          image='https://cryptorunner.com/wp-content/uploads/2017/09/trezor-review-logo.png'
        />
        </Atom.Flex>
      </Atom.Box>
 )}

const BuildToolsSelection = props => { 
  return(
    <Atom.Box {...props.styled}>
      <Atom.Heading lg heavy>Developer Tools</Atom.Heading>
      <Atom.Flex gutter3>
        <ToolCard
          title='Ganache'
          tagline='Web3'
          summary='Nulla malesuada, nisi in mollis volutpat, urna mi ultrices libero, non fermentum metus ante auctor eros. Nullam a facilisis felis.'
          image='https://maksimivanov.com/static/67064e6e386caeabd8ea8c52348ce75f/a987b/truffle_ganache_drizzle.png'
          imageCover='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVkKglAoi67EuScNj2lmVnls3xA5kpt6BWjae-YeLhqbB6yOy_'
          createdBy='ConsenSys'
          imageCreatedBy='https://miro.medium.com/max/3150/1*HWsBYAT2n833Op1P3T_Osw.png'
        />
        <ToolCard
          title='Vyper'
          tagline='language'
          summary='Nulla malesuada, nisi in mollis volutpat, urna mi ultrices libero, non fermentum metus ante auctor eros. Nullam a facilisis felis.'
          image='https://www.blockdaily.io/wp-content/uploads/2018/06/Vyper.jpg'
          imageCover='data:image/png;base64,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'
        />
        <ToolCard
          title='Embark'
          tagline='Build Smart Contract Applications'
          summary='Nulla malesuada, nisi in mollis volutpat, urna mi ultrices libero, non fermentum metus ante auctor eros. Nullam a facilisis felis.'
          image='https://avatars3.githubusercontent.com/u/12584440?s=400&v=4'
          imageCover='https://asdgvdoyen.cloudimg.io/cdn/n/twebp/https://api.beta.kauri.io:443/ipfs/QmS2XbJ9aUAG9PzvFp89q4E71MusuCuRiuWPr3jSGmDfrE'
          createdBy='status'
        />
        </Atom.Flex>
    </Atom.Box>
 )}

 const JavscriptSelection = props => { 
  return(
    <Atom.Box {...props.styled}>
      <Atom.Heading lg heavy>Javascript Libraries</Atom.Heading>
      <Atom.Flex gutter3>
        <ToolCard
          title='Ethers'
          createdBy='Richard Moore'
          tagline='powerful'
          summary='Nulla malesuada, nisi in mollis volutpat, urna mi ultrices libero, non fermentum metus ante auctor eros. Nullam a facilisis felis.'
          image='https://c.gitcoin.co/grants/7f2bdd3cbd59dcaaa1c4b54c5b73a952/ethers-gitcoin.png'
          imageCover='https://miro.medium.com/max/1200/0*52_QQpw7YGDelBvo.'
          imageCreatedBy='https://d2ygwrecguqg66.cloudfront.net/data/presentations/38911794/slideslive_richard-moore_ethersjs-a-complete-and-compact-ethereum-library.jpg?1542125158'
        />
        <ToolCard
          title='Web3.js'
          createdBy='Fabian'
          tagline='popular'
          summary='Nulla malesuada, nisi in mollis volutpat, urna mi ultrices libero, non fermentum metus ante auctor eros. Nullam a facilisis felis.'
          image='https://ludu-assets.s3.amazonaws.com/lesson-icons/26/i0fLErLtaPoc8J67WzIC'
          imageCover='https://i.ytimg.com/vi/6A5b-BhrYWk/maxresdefault.jpg'
          imageCreatedBy='https://i.ytimg.com/vi/6A5b-BhrYWk/maxresdefault.jpg'
        />
        <ToolCard
          title='eth.js'
          createdBy='Nick Dodson'
          tagline='lightweight'
          summary='Nulla malesuada, nisi in mollis volutpat, urna mi ultrices libero, non fermentum metus ante auctor eros. Nullam a facilisis felis.'
          image='https://avatars0.githubusercontent.com/u/16297473?s=280&v=4'
          imageCover='https://pbs.twimg.com/profile_images/3440615952/a385bce25fc4862ddf34adcddc434929_400x400.jpeg'
          imageCreatedBy='https://pbs.twimg.com/profile_images/3440615952/a385bce25fc4862ddf34adcddc434929_400x400.jpeg'
        />
        </Atom.Flex>
    </Atom.Box>
 )}