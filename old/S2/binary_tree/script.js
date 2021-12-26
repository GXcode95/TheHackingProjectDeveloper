class Tree {
  constructor(root, array=[4,2,0,6,5,8,11,10,15,12,18]){
    this.root = root || null
    this.array = array
    this.output = {}
    this.count = 0
  }
  
  fill(array=this.array){
    array.forEach(data=> this.insert(data))
  }

  insert(data) {
    let newNode = new Node(data)
    if(this.root === null) 
      this.root = newNode;
    else 
      this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode){
    //si data est plus petite elle va gauche
    if(newNode.data < node.data) {
      
      if(node.left === null) { // si la nodeLeft est null alors onpeut y insérer notre nouvelle node
        node.left = newNode
      } 
      else { // Tant que la node n'est pas null on continue a descendre
        this.insertNode(node.left, newNode)
      }
    }
    // SINON la data est pu grande ou égale elle va a droite
    else { 
      if(node.right === null) { // si la nodeRight est null alors onpeut y insérer notre nouvelle node
        node.right = newNode
      } 
      else { // Tant que la node n'est pas null on continue a descendre
        this.insertNode(node.right, newNode)
      }
    }
  }
  
  find(data, node=this.root, x=0, y=0) {
    // En plus de trouver une data dans l'arbe, elle pose également les coordoner des
    if(data < node.data  && node.left){
      node.x = x
      node.y = y
      return this.find(data, node.left, x-1,y+1)
    }
    
    if(data > node.data  && node.right) {
      node.x = x
      node.y = y
      return this.find(data, node.right, x+1,y+1)
    }
    node.x = x
    node.y = y
    return data == node.data ? node : null
  }

  all(node=this.root, array=[]) {
    if(node.left) {
      array = this.all(node.left, array)
    }
    
    array.push(node.data)
    
    if(node.right) {
      array = this.all(node.right, array)
    }
    return array
  }

  maxDepth(node = this.root, num = 1) {
    if(node == null) 
      return 0
    // SI aucune node n'est plus bas, on renvoie le nombre d'etage descendu
    if (node.right == null && node.left == null) {
      return num
    }
    // SI la node a 2 child, on garde la plius grand num entre le chemin de droit et de gauche
    // SINON récupére le child suivant quand un seul des deux est présent
    if (node.right && node.left){
      
      return Math.max( this.maxDepth(node.right, num+1), this.maxDepth(node.left, num + 1))
    } 
    else if (node.right != null){
        return this.maxDepth(node.right, num+1)
    } 
    else {
        return this.maxDepth(node.left, num+1)
    }
  }

  maxWidth(node = this.root){
    if(node == null) return 0// base case
    // récupere la hauteur du tableau
    let depth = this.maxDepth() 
    if(depth == 1) return 1 // un tree de 1 de hauteur a toujours 1 de largeur
    let max = 0
    // pour chaque rangée en partant du bas on recupere la width
    for(let i = 1; i < depth; i++){
      // on l'enregistre si elle est plus grande que notre max actuelle
      max = Math.max(max, this.width(i))
    }
    return max
  }
  width(level,node=this.root){
    if (node == null) return 0 // base case
    if (level == 1){
      return 1 // le level 1 d'un tree a toujours 1 de largeur
    } else if (level > 1) {
      return this.width(level - 1, node.left) + this.width(level - 1, node.right)
    }
  }
  createMatrix() {
    const height = this.maxDepth()
    const width = this.maxWidth()
    let matrix = []

    for (let i = 0; i < height; i++) {
      let row = []
      for (let j = 0; j < width; j ++) {
        row.push(" ")
      }
      matrix.push(row)
    }
    return matrix    
  }
  fillCoord() {
    this.array.forEach(data =>this.find(data))
  }
} 
class Node {
  constructor(data){
    this.data = data
    this.left = null
    this.right = null
    // on va utilisé ses coordonées pour l'affichage en tableau
    this.x = 0
    this.y = 0
  }
}

class Branch{
  constructor (nbLink,level) {
    this.nbLink = nbLink
    this.level = level
  }

  getBranch() {
    let matrix = []
    console.log("branch =>", this.nbLink)

    // if(this.nbLink == 1) {
    //   matrix.push("/-|")
    // }
    
    for (let i = 2;i < this.nbLink +2;i++ ) {
      let intSpace = this.intSpace(i)
      let bSlash = "|"
      let row = `/${intSpace}${bSlash}`
      console.log(row)
      matrix.push(row)
    }
    return matrix
  }

  intSpace(height,spaceNum=1, spaceStr="-"){
    for (let i = 1; i < spaceNum; i++) {
      spaceStr += "-"
    }
    
    spaceNum == 1 ? spaceNum = 3 :  (spaceNum-1 * 2 ) + 1


    height--
    return height > 1  ? this.intSpace(height, spaceNum, spaceStr) : spaceStr
  }
}


let myNode = new Node(9);
let bt = new Tree(myNode)
let bt2 = new Tree(myNode,[1,20,42,173,4,5,6,8,7,9,-10,11,-12,13,14,15,17,18,19,2])
bt.fill()
// console.log(bt.all())
// //console.log(" Max Height =>",bt.maxDepth())
// //console.log(" Max width =>",bt.maxWidth())
// function showStat(n, bt) {
//   let nono = bt.find(n)
//   console.log("data: " + nono.data + " x: " + nono.x + " y: " + nono.y);
// }
//[4,2,0,6,5,8,7,11,10,15,12,18].forEach(num=> showStat(num, bt))


//$                     9                          x0
//$                    /-\                          1
//$                   x---x                         3
//$
//$                     9                          x0
//$                    /-\                          1
//$                   /---\                         3
//$                  x-----x                       x5
//$                 /-\---/-\                       7
//$                x   x x   x                     x9
//$
//$                     9
//$                    /-\                          1
//$                   /---\                         3
//$                  /-----\                        5
//$                 /-------\                       7
//$                /---------\                      9   
//$               /-----------\                     11       
//$              /-------------\                    13        
//$             x---------------x                  x15                 
//$            /-\-------------/-\                  17         
//$           /---\-----------/---\                 19           
//$          /-----\---------/-----\                21            
//$         x-------x-------x-------x              x25             
//$        /-\-----/-\-----/-\-----/-\                            
//$       x   x   x   x---x   x   x   x 

//? sur la pyramide, il y a 3 niveau de  pyramide
//? ecart en partant du bas :
//?     - space => 3   ,   depth => 1          
//?     - space => 7   ,   depth => 3          
//?     - space => 15   ,   depth => 7          
//!     la width commence a 3 et progresse ainsi => width = (width * 2) + 1
//!     la heigt a la même progression en partant de 1
//*     On remarque la height est toujours égale a la derniere width

// Construit les string
function build(depth, branchs = [], n = 1) {
  // construirt des branch ayant une auteur et un longeur
  if (depth <= 0) return 0;
  //console.log("n=>", n)
  //console.log("depth=>", depth)
  let branch = new Branch(n,depth)
  console.log("branche créer avec " + n  + " links et une depth de " + depth)
  n = n * 2 + 1
  branchs.push(branch)
  return depth > 1 ? build(depth -1, branchs, n) : branchs

}
// crée des row a push dans une matri
function createMatrix(depth) {
  // on se sert de notre classe branch pour créer des string de row des branches
  // on mets chaque string dans une array
  // le tout dans une matrix
  // ainsi la matrix[0] contient le lien entre la rangée 0 et 1 de l'arbre
  // la matrix[1] le lien entre la rangée 1 et 2
  // ect...
  let branchs = build(depth-1)// toujorus -1 car l'etage 0 contient que le chiffre de départ

  let matrix = []
  branchs.forEach(branch => {
    matrix.push(branch.getBranch())
  })
  matrix.forEach((row,i) => {
    if (!row.length) {
      matrix.splice(i, 1)
    }
  })
  return matrix
}
function getMatrixheight(tree, matrix) {
  //let depth = tree.maxDepth()
  let matrixHeight = matrix.length

  matrix.forEach(row => matrixHeight += row.length )
  
  console.log(matrixHeight)
  return matrixHeight;
}
function fillSpace(tree, matrix) {
  let maxSpace = getMatrixheight(tree, matrix)
  // matrix.forEach(row => {
    // console.log(getExtSpace(maxSpace) + row)
  //})
  console.log("maxspace", maxSpace)
  for (let i = 0; i < matrix.length; i ++) {
    let row = matrix[i]
    for (let j =0; j < row.length; j++) {
      row[j] = getExtSpace(maxSpace) + row[j]
      console.log(getExtSpace(maxSpace) + row[j])
      maxSpace --
    }

  }

}
//  renvoie une string du nombre d'espace passé
function getExtSpace(n) {
  let extSpace = ""
  for(let i = 0; i < n; i+=1) {
    extSpace += " "
  }
  return extSpace
}

function showTree(tree){
}

let tree = new Tree(myNode)
tree.fill()
let depth = tree.maxDepth()
let matrix = createMatrix(depth - 1)
fillSpace(tree, matrix)

