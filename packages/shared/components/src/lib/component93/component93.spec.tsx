import { render } from '@testing-library/react';

import Component93 from './component93';

describe('Component93', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component93 />);
    expect(baseElement).toBeTruthy();
  });
});
