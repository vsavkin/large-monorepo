import { render } from '@testing-library/react';

import Icon14 from './icon14';

describe('Icon14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon14 />);
    expect(baseElement).toBeTruthy();
  });
});
