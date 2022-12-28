"use strict";
exports.id = 168;
exports.ids = [168];
exports.modules = {

/***/ 8490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F8": () => (/* binding */ GetNfts),
/* harmony export */   "Iw": () => (/* binding */ UserProfile),
/* harmony export */   "Pv": () => (/* binding */ GetPosts),
/* harmony export */   "Xc": () => (/* binding */ RecommendProfiles),
/* harmony export */   "Y8": () => (/* binding */ ExploreProfiles),
/* harmony export */   "eS": () => (/* binding */ GetBlogPost),
/* harmony export */   "hZ": () => (/* binding */ GetProfilesQuery),
/* harmony export */   "vg": () => (/* binding */ GetProfilesRevenueQuery)
/* harmony export */ });
/* unused harmony export GetUserPosts */
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2977);
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(urql__WEBPACK_IMPORTED_MODULE_0__);

const RecommendProfiles = urql__WEBPACK_IMPORTED_MODULE_0__.gql`
  query RecommendedProfiles {
    recommendedProfiles{
        id
        name
        bio
        picture {
          ... on MediaSet {
            original {
              url
            }
          }
        }
        handle
        stats {
          totalFollowers
        }
    }
  }
`;
const UserProfile = urql__WEBPACK_IMPORTED_MODULE_0__.gql`
  query UserProfile($request: ProfileQueryRequest!) {
    profiles(request: $request){
    items{
      name
      handle
      picture {
        ... on NftImage {
        contractAddress
        tokenId
        uri
        verified
      }
      ... on MediaSet {
        original {
          url
          mimeType
        	}
      	}
      }
    }
    }
  }
`;
const GetProfilesRevenueQuery = urql__WEBPACK_IMPORTED_MODULE_0__.gql`
  query GetProfilesRevenueQuery($request:  ProfileFollowRevenueQueryRequest!) {
    profileFollowRevenue(request: $request){
      revenues
      {
        total{
          asset
          {
            name
            symbol
          }
          value
        }
      }
    }

  }`;
const GetProfilesQuery = urql__WEBPACK_IMPORTED_MODULE_0__.gql`
  query GetProfilesQuery($request: SingleProfileQueryRequest! ) {

    profile(request: $request) {
    id
    name
    bio
    attributes {
      displayType
      traitType
      key
      value
    }
    followNftAddress
    metadata
    isDefault
    picture {
      ... on NftImage {
        contractAddress
        tokenId
        uri
        verified
      }
      ... on MediaSet {
        original {
          url
          mimeType
        }
      }
      __typename
    }
    handle
    coverPicture {
      ... on NftImage {
        contractAddress
        tokenId
        uri
        verified
      }
      ... on MediaSet {
        original {
          url
          mimeType
        }
      }
      __typename
    }
    ownedBy
    dispatcher {
      address
      canUseRelay
    }
    stats {
      totalFollowers
      totalFollowing
      totalPosts
      totalComments
      totalMirrors
      totalPublications
      totalCollects
    }
    followModule {
      ... on FeeFollowModuleSettings {
        type
        amount {
          asset {
            symbol
            name
            decimals
            address
          }
          value
        }
        recipient
      }
      ... on ProfileFollowModuleSettings {
        type
      }
      ... on RevertFollowModuleSettings {
        type
      }
    }
  }
  }
`;
const GetUserPosts = urql__WEBPACK_IMPORTED_MODULE_0__.gql`
  query GetUserPosts($request: SingleProfileQueryRequest!) {
    profile(request: $request) {
    id
    name
    bio
    attributes {
      displayType
      traitType
      key
      value
    }
    followNftAddress
    metadata
    isDefault
    picture {
      ... on NftImage {
        contractAddress
        tokenId
        uri
        verified
      }
      ... on MediaSet {
        original {
          url
          mimeType
        }
      }
      __typename
    }
    handle
    coverPicture {
      ... on NftImage {
        contractAddress
        tokenId
        uri
        verified
      }
      ... on MediaSet {
        original {
          url
          mimeType
        }
      }
      __typename
    }
    ownedBy
    dispatcher {
      address
      canUseRelay
    }
    stats {
      totalFollowers
      totalFollowing
      totalPosts
      totalComments
      totalMirrors
      totalPublications
      totalCollects
    }
    followModule {
      ... on FeeFollowModuleSettings {
        type
        amount {
          asset {
            symbol
            name
            decimals
            address
          }
          value
        }
        recipient
      }
      ... on ProfileFollowModuleSettings {
        type
      }
      ... on RevertFollowModuleSettings {
        type
      }
    }
  }
  }
`;
const RecommendedProfiles = urql__WEBPACK_IMPORTED_MODULE_0__.gql`
  query RecommendedProfiles {
    recommendedProfiles {
        id
        name
        picture {
          ... on MediaSet {
            original {
              url
            }
          }
        }
        handle
        stats {
          totalFollowers
        }
    }
  }
`;
const GetPosts = urql__WEBPACK_IMPORTED_MODULE_0__.gql`
  query Publications($id: ProfileId!, $limit: LimitScalar) {
    publications(request: {
      profileId: $id,
      publicationTypes: [POST],
      limit: $limit
    }) {
      items {
        __typename
        ... on Post {
          ...PostFields
        }
      }
    }
  }
  fragment PostFields on Post {
    id
    metadata {
      ...MetadataOutputFields
    }
    createdAt
  }
  fragment MetadataOutputFields on MetadataOutput {
    name
    description
    content
    media {
      original {
        ...MediaFields
      }
    }
    attributes {
      displayType
      traitType
      value
    }
  }
  fragment MediaFields on Media {
    url
    mimeType
  }
`;
const GetNfts = urql__WEBPACK_IMPORTED_MODULE_0__.gql`
  query GetNfts($address: EthereumAddress!) {
    nfts(request: {
      ownerAddress: $address,
      limit: 10,
      chainIds: [1,137]
    }) {
       items {
        contractName
        contractAddress
        symbol
        name
        description
        contentURI
        originalContent {
          uri
          metaType
        }

       }
    }
  }

`;
const GetBlogPost = urql__WEBPACK_IMPORTED_MODULE_0__.gql`
  query GetBlogPost($address: [String!]!) {

      transactions(
        tags: [
          {
            name: "Contributor"
            values: $address
          }
        ]
        sort: HEIGHT_DESC
        first: 1
      ) {
        edges {
          node {
            id
          }
        }
      }
  }
`;
const ExploreProfiles = urql__WEBPACK_IMPORTED_MODULE_0__.gql`
query ExploreProfiles($request: ExploreProfilesRequest!) {
  exploreProfiles(request: $request) {
    items {
      id
      name
      bio
      handle
      picture {
        ... on MediaSet {
          original {
            url
          }
        }
      }
      stats {
        totalFollowers
      }
    }
  }
}
`;


/***/ }),

/***/ 2553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CN": () => (/* binding */ formatUrl),
/* harmony export */   "Xn": () => (/* binding */ shortenAddress),
/* harmony export */   "e4": () => (/* binding */ formatImageUrl),
/* harmony export */   "uf": () => (/* binding */ formatNumber),
/* harmony export */   "xb": () => (/* binding */ isEmpty)
/* harmony export */ });
const formatImageUrl = (imageUrl, defaultPicture = null)=>{
    if (!imageUrl) return defaultPicture;
    if (imageUrl.startsWith("ipfs://")) {
        return `https://w3s.link/ipfs/${imageUrl.replace("ipfs://", "")}`;
    }
    return imageUrl;
};
const formatUrl = (url)=>{
    if (!url) return null;
    if (url.startsWith("https://")) {
        return url;
    }
    return `https://${url}`;
};
const isEmpty = (n)=>{
    if (n == null) return true;
    return !(!!n ? typeof n === "object" ? Array.isArray(n) ? !!n.length : !!Object.keys(n).length : true : false);
};
function shortenAddress(address, chars = 4) {
    if (!address) {
        return null;
    }
    const parsed = address;
    return `${parsed.substring(0, chars + 2)}...${parsed.substring(address.length - chars)}`;
}
const formatNumber = (number)=>{
    if (number == "0.0") return 0;
    return number;
};


/***/ })

};
;