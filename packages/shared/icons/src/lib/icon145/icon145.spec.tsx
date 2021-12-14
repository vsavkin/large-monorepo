import { render } from '@testing-library/react';

import Icon145 from './icon145';

describe('Icon145', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon145 />);
    expect(baseElement).toBeTruthy();
  });
});
