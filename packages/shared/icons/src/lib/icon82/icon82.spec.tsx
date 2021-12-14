import { render } from '@testing-library/react';

import Icon82 from './icon82';

describe('Icon82', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon82 />);
    expect(baseElement).toBeTruthy();
  });
});
