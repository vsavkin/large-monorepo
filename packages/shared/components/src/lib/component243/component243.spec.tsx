import { render } from '@testing-library/react';

import Component243 from './component243';

describe('Component243', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component243 />);
    expect(baseElement).toBeTruthy();
  });
});
