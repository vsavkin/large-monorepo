import { render } from '@testing-library/react';

import ImportantComponent24 from './important-component-24';

describe('ImportantComponent24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent24 />);
    expect(baseElement).toBeTruthy();
  });
});
