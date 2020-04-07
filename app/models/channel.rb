# == Schema Information
#
# Table name: channels
#
#  id            :bigint           not null, primary key
#  title         :string           not null
#  work_space_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Channel < ApplicationRecord
    validates :title, presence: true
    belongs_to :work_space
    has_many :messages

end
