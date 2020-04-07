# == Schema Information
#
# Table name: channel_subscribers
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class ChannelSubscriber < ApplicationRecord
    belongs_to :user
    belongs_to :channel
end
