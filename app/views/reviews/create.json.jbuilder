if @review.persisted?
  json.review render(partial: 'reviews/review', formats: :html, locals: {review: @review})
  json.form render(partial: 'reviews/form', formats: :html, locals: { restaurant: @restaurant, review: Review.new })
else
  json.form render(partial: 'reviews/form', formats: :html, locals: { restaurant: @restaurant, review: @review })
end
