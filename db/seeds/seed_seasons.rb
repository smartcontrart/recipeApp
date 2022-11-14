seasons_path = File.join(File.dirname(__FILE__),'/seasons_seed.csv')
state_path = File.join(File.dirname(__FILE__),'/states_seed.csv')


puts 'seeding seasons'
File.readlines(seasons_path).each do |season|
    # rowArray = season.split(",")
    # binding.pry
    # beginningDate = Date.parse(rowArray[0])
    # endDate = Date.parse(rowArray[1].delete('\n'))
    season_cleaned = season.delete("\n")
    File.readlines(state_path).each do |state|
        # binding.pry
        state_cleaned = state.delete("\n")
        
        @season = Season.create(state: state_cleaned, period: season_cleaned)
    end
end      