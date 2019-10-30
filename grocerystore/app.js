var shopper = {
    freezerMeal: "burritos",
    list: 25,
    getStickerFromCheckOut: true,
    groceryCart: ['cookies','apples','milk','eggs'],
    target: function () {
        return this.freezerMeal + "$2";
    }
}

shopper.target()

var golfer = {
    course: "valleyView",
    clubs: 14,
    dontHitBallInWater: false,
    golfBag: ['driver','putter','iron','fairway'],
    callaway: function () {
        return this.clubs + "$400";
    }
}

golfer.callaway()