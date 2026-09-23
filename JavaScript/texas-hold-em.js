class Hand
{
    constructor(holdCards, communityCards){
        this.type = "";
        this.ranks = [];
        this.cardCount = new Array(13).fill(0);
        this.suitCount= new Array(4).fill(0);
        this.scoringCards = [];
        this.fullHand = holdCards.concat(communityCards)
          .sort((a,b) => this.getCardValue(b) - this.getCardValue(a));
    }

    getType() {return this.type;}
    getRanks() { return this.ranks;}

    checkStraightFlush() {
        if (this.checkStraight() && this.checkFlush(true)) {
            return true;
        }
        return false;
    }
  
    checkFourOfAKind() {
        if (Math.max(...this.cardCount) == 4) {
            let face = this.getFace(this.cardCount.indexOf(4));
            this.scoringCards = this.fullHand.filter(card => card.includes(face));
            return true;
        }
        return false;
    }

    checkFlush(withStraight) {
        if (withStraight)
             return this.checkStraightForFlush();        
      
        if (Math.max(...this.suitCount) >= 5) {
            let flush = this.getSuit(this.suitCount.indexOf(Math.max(...this.suitCount)));
            this.scoringCards = this.fullHand.filter(card => card.includes(flush));
            return true;
        }
        return false;
    }
  
  checkStraightForFlush(){
     var _suits = ['♥','♦','♣','♠'];
     for (var i = 0; i < _suits.length; i++)
      {
         if (this.scoringCards.filter(x => x.includes(_suits[i])).length >= 5){
            this.scoringCards = this.scoringCards.filter(x => x.includes(_suits[i]));
            return true;
        }
      } 
            return false;
  }
  
    checkFullHouse() {
        if (this.checkThreeOfAKind() && secondMax(this.cardCount) == 2) {
            let firstFace = this.getFace(this.cardCount.indexOf(3));
            let secondFace = this.getFace(this.cardCount.indexOf(2));
            this.scoringCards = this.fullHand.filter(card => card.includes(firstFace))
              .concat(this.fullHand.filter(card => card.includes(secondFace)));
            return true;
        }
        return false;
    }
    checkStraight() { 

        let consecutiveCards = 0;
        let cardAdditions = 0;
        for (let i = this.cardCount.length - 1; i >= 0; i--)
        {
            if (this.cardCount[i] >= 1) {
              consecutiveCards++;
              let faceCardGroup = this.fullHand.filter(card => card.includes(this.getFace(i)));
              for (let j= 0; j < faceCardGroup.length; j++){
              this.scoringCards[cardAdditions] = faceCardGroup[j];
              cardAdditions++;
              }
            } else
              {
                if (consecutiveCards >= 5) return true;
                consecutiveCards = 0;
                cardAdditions = 0;
                this.scoringCards = [];
              }
        }
            if (consecutiveCards >= 5) return true;
            this.scoringCards = [];
            return false;
        }
        
    checkThreeOfAKind() {
        if (Math.max(...this.cardCount) == 3) {
            let face = this.getFace(this.cardCount.indexOf(3));
            this.scoringCards = this.fullHand.filter(card => card.includes(face));
            return true;
        }
        return false;
    }
  
    checkTwoPair() {         
        if (this.checkPair() && secondMax(this.cardCount) == 2) {
        this.cardCount[this.cardCount.indexOf(2)] = 0;
        let face = this.getFace(this.cardCount.indexOf(2));
        this.scoringCards = this.scoringCards.concat(this.fullHand.filter(card => card.includes(face)))
          .sort((a,b) => this.getCardValue(b) - this.getCardValue(a));
        return true;
    }
        return false;
    }
  
    checkPair() {
        if (Math.max(...this.cardCount) == 2)  {
            let face = this.getFace(this.cardCount.indexOf(2));
            this.scoringCards = this.fullHand.filter(card => card.includes(face));
            return true;
        }
        return false;
    }

    checkHand(){
        this.calculateCounts();
        this.type = this.getHandType();
        this.ranks = this.calculateRank(this.fullHand);
        return;
    }
  
  getHandType(){
        if (this.checkStraightFlush()) return "straight-flush";
        if (this.checkFourOfAKind()) return "four-of-a-kind";
        if (this.checkFullHouse()) return "full house";
        if (this.checkFlush()) return "flush";
        if (this.checkStraight()) return "straight";
        if (this.checkThreeOfAKind()) return "three-of-a-kind";
        if (this.checkTwoPair()) return "two pair";
        if (this.checkPair()) return "pair";
        else return "nothing";
  }

    calculateRank(hand){
      var scoringCardsRank = [];
      var nonScoringCardsRank = [];
      var bestHand = [];

      this.scoringCards = this.scoringCards;
      var remainingCards = difference(this.fullHand, this.scoringCards);
      remainingCards.sort((a,b) => this.getCardValue(b) - this.getCardValue(a));
        for (let i=0; i < this.scoringCards.length; i++ )
            scoringCardsRank[i] = this.scoringCards[i].replace(/[♥♦♣♠]/g,"");
      scoringCardsRank = scoringCardsRank.filter((a, b) => scoringCardsRank.indexOf(a) === b);
      for (let i2 = 0; i2 < 5 - this.scoringCards.length; i2++)
          nonScoringCardsRank[i2] = remainingCards[i2].replace(/[♥♦♣♠]/g,"");
      nonScoringCardsRank = nonScoringCardsRank.filter((a, b) => nonScoringCardsRank.indexOf(a) === b);
      nonScoringCardsRank.sort((a,b) => this.getFaceValue(b) - this.getFaceValue(a));
      bestHand = scoringCardsRank.concat(nonScoringCardsRank);
      return bestHand.slice(0,5);
    }
  
  getCardValue(card){
      var face = card.replace(/[♥♦♣♠]/g, "").trim();
      var suit = card.replace(/[1234567890JQKA]/g, "").trim();
      return this.getFaceValue(face) * 4 + this.getSuitValue(suit);
  }

    calculateCounts() {
        for (let i = 0; i < this.fullHand.length; i++) {
            var face = this.fullHand[i].replace(/[♥♦♣♠]/g, "").trim();
            var suit = this.fullHand[i].replace(/[1234567890JQKA]/g, "").trim();
            this.cardCount[this.getFaceValue(face)]++;
            this.suitCount[this.getSuitValue(suit)]++;
        }
    }

    getFaceValue(cardFace){
        var _ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        return _ranks.indexOf(cardFace);
    }
  
  getFace(faceValue){
    var _ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    return _ranks[faceValue];
  }
    
    getSuitValue(cardSuit){
            var _suits = ['♥','♦','♣','♠'];
            return _suits.indexOf(cardSuit);
    }
  
  getSuit(suitValue){
    var _suits = ['♥','♦','♣','♠'];
    return _suits[suitValue];
  }
}

function secondMax(array) {
    var arr = array.slice(0);
    var max = Math.max.apply(null, arr), // get the max of the array
        maxi = arr.indexOf(max);
    arr[maxi] = -Infinity; // replace max in the array with -infinity
    var secondMax = Math.max.apply(null, arr); // get the new max
    arr[maxi] = max;
    return secondMax;
}

function difference(first, second) {
    for (var i=0; i<second.length; i++) {
        var index = undefined;
        while ((index = first.indexOf(second[i])) !== -1) {
            first.splice(index, 1);
        }
    }
    return first;
}

function hand(holeCards, communityCards) {
    let type = "";
    let myHand = new Hand(holeCards,communityCards);
    myHand.checkHand();
    return {type:myHand.getType(), ranks: myHand.getRanks()};
}