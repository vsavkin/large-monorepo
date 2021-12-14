import { render } from '@testing-library/react';

import ImportantComponent13 from './important-component-13';

describe('ImportantComponent13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent13 />);
    expect(baseElement).toBeTruthy();
  });
});
