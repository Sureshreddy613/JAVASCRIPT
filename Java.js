/*
Assessment Requirements
1. Create a variable that can hold a number of NFTs. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFTs you have created
*/

// create a variable to hold your NFTs
const NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(_name, _haircolour, _outfit, _accessories) {
    const nft = {
        "name": _name,
        "haircolour": _haircolour,
        "outfit": _outfit,
        "accessories": _accessories
    };
    NFTs.push(nft);
    console.log("Minted: " + _name);
}

// create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < NFTs.length; i++) {
        console.log("\nID: \t\t" + (i + 1));
        console.log("Name: \t\t" + NFTs[i].name);
        console.log("Haircolour: \t" + NFTs[i].haircolour);
        console.log("Outfit: \t" + NFTs[i].outfit);
        console.log("Accessories: \t" + NFTs[i].accessories);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal NFTs: " + NFTs.length);
}

// call your functions below this line
mintNFT("Suresh", "black", "gucci", "silver chain");
mintNFT("Adarsh", "brown", "puma", "gold ring");
mintNFT("Tarun", "blue", "nike", "bracelet");
mintNFT("Varsha", "green", "supreme", "necklace");
listNFTs();
getTotalSupply();
