import { render } from '@testing-library/react';

import Component143 from './component143';

describe('Component143', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component143 />);
    expect(baseElement).toBeTruthy();
  });
});
