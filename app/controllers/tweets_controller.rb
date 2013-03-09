class TweetsController < ApplicationController
  before_filter :load_tweet, :only => [:show, :update, :destroy]
  respond_to :json

  def index
    respond_with(Tweet.all)
  end

  def show
    respond_with(@tweet)
  end

  def update
    respond_with(@tweet) if @tweet.update_attributes(params[:tweet])
  end

  def create
    respond_with(@tweet) if @tweet = Tweet.create(params[:tweet])
  end

  def destroy
    respond_with(Tweet.all) if @tweet.destroy
  end

  private
  def load_tweet
    @tweet = Tweet.find params[:id]
  end

end
