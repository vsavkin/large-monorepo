import { render } from '@testing-library/react';

import Icon88 from './icon88';

describe('Icon88', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon88 />);
    expect(baseElement).toBeTruthy();
  });
});
