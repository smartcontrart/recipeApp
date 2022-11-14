
module Api
    module V1
        class QuantitiesMultiplicatorController < ApplicationController
            def update
                @quantities_multiplicator = QuantitiesMultiplicator.find(params[:id])
                if params[:to_do] === "increment"
                    @quantities_multiplicator.multiplicator +=1
                elsif params[:to_do] === "decrement" 
                    if  @quantities_multiplicator.multiplicator <= 1
                    else
                        @quantities_multiplicator.multiplicator -=1
                    end
                end
                @quantities_multiplicator.save
                render json: {quantities_multiplicator: @quantities_multiplicator, day: @quantities_multiplicator.meal.day}
            end
        end
    end
end
