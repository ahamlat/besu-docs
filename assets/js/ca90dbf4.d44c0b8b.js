"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[2080],{78769:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var o=i(74848),s=i(28453);const t={title:"Configure Besu",description:"Specify options in the Besu configuration file.",sidebar_position:1,tags:["public networks","private networks"]},r="Configure Besu",c={id:"public-networks/how-to/configure-besu/index",title:"Configure Besu",description:"Specify options in the Besu configuration file.",source:"@site/docs/public-networks/how-to/configure-besu/index.md",sourceDirName:"public-networks/how-to/configure-besu",slug:"/public-networks/how-to/configure-besu/",permalink:"/public-networks/how-to/configure-besu/",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/how-to/configure-besu/index.md",tags:[{inline:!0,label:"public networks",permalink:"/tags/public-networks"},{inline:!0,label:"private networks",permalink:"/tags/private-networks"}],version:"current",lastUpdatedAt:1730695412e3,sidebarPosition:1,frontMatter:{title:"Configure Besu",description:"Specify options in the Besu configuration file.",sidebar_position:1,tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"How to",permalink:"/public-networks/how-to"},next:{title:"Use a profile",permalink:"/public-networks/how-to/configure-besu/profile"}},l={},d=[{value:"Configuration order of precedence",id:"configuration-order-of-precedence",level:2},{value:"TOML configuration file",id:"toml-configuration-file",level:2},{value:"Default configuration",id:"default-configuration",level:2},{value:"Peering",id:"peering",level:3},{value:"Storage",id:"storage",level:3},{value:"Sync",id:"sync",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"configure-besu",children:"Configure Besu"})}),"\n",(0,o.jsxs)(n.p,{children:["Besu comes with a ",(0,o.jsx)(n.a,{href:"#default-configuration",children:"default configuration"})," that is suitable for staking."]}),"\n",(0,o.jsxs)(n.p,{children:["You can override the default values by specifying ",(0,o.jsx)(n.a,{href:"/public-networks/reference/cli/options",children:"configuration options"})," on the command line, as environment variables, or in a ",(0,o.jsx)(n.a,{href:"#toml-configuration-file",children:"TOML configuration file"})," that can be reused across node startups."]}),"\n",(0,o.jsxs)(n.p,{children:["You can also use a ",(0,o.jsx)(n.a,{href:"/public-networks/how-to/configure-besu/profile",children:"pre-configured profile"})," for some common use cases or create and apply a ",(0,o.jsx)(n.a,{href:"/public-networks/how-to/configure-besu/profile#load-external-profiles",children:"custom profile"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"configuration-order-of-precedence",children:"Configuration order of precedence"}),"\n",(0,o.jsx)(n.p,{children:"For options specified in multiple places, the order of precedence is as follows:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Command line"}),"\n",(0,o.jsx)(n.li,{children:"Environment variable"}),"\n",(0,o.jsxs)(n.li,{children:["Configuration file specified by ",(0,o.jsx)(n.code,{children:"--config-file"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/public-networks/how-to/configure-besu/profile",children:"Pre-configured profile"})," specified by ",(0,o.jsx)(n.code,{children:"--profile"})]}),"\n",(0,o.jsx)(n.li,{children:"Default values (used if no other configuration source is available)"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["For example, if you specify a ",(0,o.jsx)(n.code,{children:"config.toml"})," configuration file and ",(0,o.jsx)(n.code,{children:"staker"})," profile, and an option\nis not found in the environment variables, Besu looks for it in ",(0,o.jsx)(n.code,{children:"config.toml"}),".\nIf the option is not found in ",(0,o.jsx)(n.code,{children:"config.toml"}),", Besu looks for it in ",(0,o.jsx)(n.code,{children:"staker.toml"}),".\nIf the option is not found in ",(0,o.jsx)(n.code,{children:"staker.toml"}),", Besu uses the default value for that option."]}),"\n",(0,o.jsx)(n.h2,{id:"toml-configuration-file",children:"TOML configuration file"}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["The configuration file is used for node-level settings. You can specify network-wide settings in the ",(0,o.jsx)(n.a,{href:"/public-networks/concepts/genesis-file",children:"genesis file"}),"."]})}),"\n",(0,o.jsxs)(n.p,{children:["Specify the configuration file using the ",(0,o.jsx)(n.a,{href:"/public-networks/reference/cli/options#config-file",children:(0,o.jsx)(n.code,{children:"--config-file"})})," option.\nThe configuration file must be a valid TOML file composed of key/value pairs. Each key is the same as the corresponding command line option name without the leading dashes (",(0,o.jsx)(n.code,{children:"--"}),")."]}),"\n",(0,o.jsx)(n.p,{children:"Values must conform to TOML specifications for string, numbers, arrays, and booleans. Specific differences between the command line and the TOML file format are:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Comma-separated lists on the command line are string arrays in the TOML file."}),"\n",(0,o.jsxs)(n.li,{children:["Enclose file paths, hexadecimal numbers, URLs, and <host",":port","> values in quotes."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Table headings are ignored in TOML files. If you specify a valid Besu option under a table heading in the configuration file, Besu ignores the table heading and reads the option in the same way it does for options not under table headings."}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"/public-networks/reference/cli/options",children:"command line reference"})," includes configuration file examples for each option."]})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-toml",metastring:'title="Sample TOML configuration file"',children:'# Valid TOML config file\ndata-path="~/besudata" # Path\n\n# Network\nbootnodes=["enode://001@123:4567", "enode://002@123:4567", "enode://003@123:4567"]\n\np2p-host="1.2.3.4"\np2p-port=1234\nmax-peers=42\n\nrpc-http-host="5.6.7.8"\nrpc-http-port=5678\n\nrpc-ws-host="9.10.11.12"\nrpc-ws-port=9101\n\n# Chain\ngenesis-file="~/genesis.json" # Path to the custom genesis file\n\n# Mining\nminer-enabled=true\nminer-coinbase="0xfe3b557e8fb62b89f4916b721be55ceb828dbd73"\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title="Starting Besu with a configuration file"',children:"besu --config-file=/home/me/me_node/config.toml\n"})}),"\n",(0,o.jsx)(n.h2,{id:"default-configuration",children:"Default configuration"}),"\n",(0,o.jsxs)(n.p,{children:["The following tables describe important default values of Besu's configuration.\nWhen using the default configuration, Besu is optimized for staking.\nYou can extend these defaults using a ",(0,o.jsx)(n.a,{href:"/public-networks/how-to/configure-besu/profile",children:"profile"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["For example, extending the default configuration using the ",(0,o.jsx)(n.a,{href:"/public-networks/how-to/configure-besu/profile#staker-profile",children:"staker profile"})," directs Besu to use Mainnet, creating a staking-optimized node ready to run with a ",(0,o.jsx)(n.a,{href:"/public-networks/concepts/node-clients#consensus-clients",children:"validator and consensus client"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"peering",children:"Peering"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Configuration option"}),(0,o.jsx)(n.th,{children:"Default"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/public-networks/reference/cli/options#discovery-enabled",children:(0,o.jsx)(n.code,{children:"discovery-enabled"})})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"true"})}),(0,o.jsx)(n.td,{children:"Besu assumes the node will automatically discover other Ethereum nodes using P2P."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/public-networks/reference/cli/options#p2p-enabled",children:(0,o.jsx)(n.code,{children:"p2p-enabled"})})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"true"})}),(0,o.jsx)(n.td,{children:"Besu assumes the node will connect P2P."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/public-networks/reference/cli/options#engine-rpc-enabled",children:(0,o.jsx)(n.code,{children:"engine-rpc-enabled"})})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"true"})}),(0,o.jsx)(n.td,{children:"Besu assumes the Engine API will be required to communicate with the consensus layer."})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"storage",children:"Storage"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Configuration option"}),(0,o.jsx)(n.th,{children:"Default"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/public-networks/reference/cli/options#data-storage-format",children:(0,o.jsx)(n.code,{children:"data-storage-format"})})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"BONSAI"})}),(0,o.jsxs)(n.td,{children:["Besu uses ",(0,o.jsx)(n.a,{href:"/public-networks/concepts/data-storage-formats#bonsai-tries",children:"Bonsai Tries"}),", the most space-efficient data storage format."]})]})})]}),"\n",(0,o.jsx)(n.h3,{id:"sync",children:"Sync"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Configuration option"}),(0,o.jsx)(n.th,{children:"Default"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/public-networks/reference/cli/options#sync-mode",children:(0,o.jsx)(n.code,{children:"sync-mode"})})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"SNAP"})}),(0,o.jsxs)(n.td,{children:["Besu syncs using ",(0,o.jsx)(n.a,{href:"/public-networks/concepts/node-sync#snap-synchronization",children:"snap sync"}),", the most time-efficient sync method."]})]})})]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["You can see all default configuration values in the ",(0,o.jsx)(n.a,{href:"/public-networks/reference/cli/options",children:"configuration options reference"}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>c});var o=i(96540);const s={},t=o.createContext(s);function r(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);