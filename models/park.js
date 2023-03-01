const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
    }

    Park.prototype.addDinosaur = function(dinosaur) {
        this.dinosaurs.push(dinosaur);
        };
        
    Park.prototype.removeDinosaur = function(dinosaur) {
        const index = this.dinosaurs.indexOf(dinosaur);
        if (index !== -1) {
        this.dinosaurs.splice(index, 1);
        }
        };
        
    Park.prototype.getMostPopularDinosaur = function () {
        let mostPopularDinosaur = null;
        let highestPopularity = 0;
        for (const dinosaur of this.dinosaurs) {
            if (dinosaur.guestsAttractedPerDay > highestPopularity) {
                highestPopularity = dinosaur.guestsAttractedPerDay;
                mostPopularDinosaur = dinosaur;
            }
        }
        return mostPopularDinosaur;
    };
        
    Park.prototype.getAllDinosaursBySpecies = function(species) {
        return this.dinosaurs.filter(dinosaur => dinosaur.species === species);
        };
        
    Park.prototype.getVisitorsPerDay = function() {
        let total = 0;
        for (let dinosaur of this.dinosaurs) {
        total += dinosaur.guestsAttractedPerDay;
        }
        return total;
        };
        
    Park.prototype.getTotalVisitorsPerYear = function() {
        return this.getTotalVisitorsPerDay() * 365;
        };
        
    Park.prototype.getTotalRevenuePerYear = function() {
        return this.getTotalVisitorsPerYear() * this.ticketPrice;
        };
        
        module.exports = Park;
