import { render } from '@testing-library/react';

import ImportantComponent7 from './important-component-7';

describe('ImportantComponent7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent7 />);
    expect(baseElement).toBeTruthy();
  });
});
