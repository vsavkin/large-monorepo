import { render } from '@testing-library/react';

import Icon78 from './icon78';

describe('Icon78', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon78 />);
    expect(baseElement).toBeTruthy();
  });
});
