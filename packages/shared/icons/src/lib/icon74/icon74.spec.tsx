import { render } from '@testing-library/react';

import Icon74 from './icon74';

describe('Icon74', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon74 />);
    expect(baseElement).toBeTruthy();
  });
});
