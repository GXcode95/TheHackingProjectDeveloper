puts "Renaming files..."

folder_path = "/home/sonfaya/Dev/thp/THP_FINAL/seeder/cloud_repo"

i = 0

Dir.glob(folder_path + "/*").sort.each do |f|
    filename = File.basename(f, File.extname(f))
    File.rename(f, "reset_"+ i.to_s + File.extname(f))
    i+=1
end

i = 0

Dir.glob(folder_path + "/*").sort.each do |f|
    filename = File.basename(f, File.extname(f))
    #File.rename(f, "game_"+ i.to_s + File.extname(f))
    File.rename(f, "game_"+ i.to_s + ".jpg")
    i+=1
end

puts "Renaming complete."

# File.rename("patate.js", "game.js")