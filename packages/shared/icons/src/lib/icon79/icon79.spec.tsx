import { render } from '@testing-library/react';

import Icon79 from './icon79';

describe('Icon79', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon79 />);
    expect(baseElement).toBeTruthy();
  });
});
