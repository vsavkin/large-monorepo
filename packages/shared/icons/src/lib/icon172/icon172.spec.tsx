import { render } from '@testing-library/react';

import Icon172 from './icon172';

describe('Icon172', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon172 />);
    expect(baseElement).toBeTruthy();
  });
});
