// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyNFT is ERC721 {
    constructor(
        string memory _name,
        string memory _symbol
    ) ERC721(_name, _symbol) {}

    mapping(uint256 tokenId => string tokenURI) _tokenURIs;
    uint256 totalSupply = 0;

    function minting(string memory tokenURI) public {
        _tokenURIs[totalSupply] = tokenURI;
        _mint(msg.sender, _tokenId);
        totalSupply += 1;
    }

    function tokenURI(
        uint256 _tokenId
    ) public view override returns (string memory) {
        return _tokenURIs[_tokenId];
    }

    // nft 정보를 opensea
    // _baseURI() + tokenURI(0) {}
    // _baseURI() + tokenURI(1)
    // _baseURI() + tokenURI(2)

    function _baseURI() internal view override returns (string memory) {
        return "https://copper-wrong-haddock-919.mypinata.cloud/ipfs/";
    }
}
