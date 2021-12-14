import { render } from '@testing-library/react';

import ImportantComponent52 from './important-component-52';

describe('ImportantComponent52', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent52 />);
    expect(baseElement).toBeTruthy();
  });
});
