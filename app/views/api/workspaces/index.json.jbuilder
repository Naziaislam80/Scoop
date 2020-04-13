@work_spaces.each do |work_space|
    json.set! work_space.id do
        json.partial! 'api/work_spaces/work_space', work_space: work_space
    end
end