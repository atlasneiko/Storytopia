@claps.each do |clap|
  json.set! clap.id do
    json.partial! 'api/claps/clap', clap: clap
  end
end
