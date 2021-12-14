import { render } from '@testing-library/react';

import Component107 from './component107';

describe('Component107', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component107 />);
    expect(baseElement).toBeTruthy();
  });
});
