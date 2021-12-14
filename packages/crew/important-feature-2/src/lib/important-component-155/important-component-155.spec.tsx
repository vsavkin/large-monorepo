import { render } from '@testing-library/react';

import ImportantComponent155 from './important-component-155';

describe('ImportantComponent155', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent155 />);
    expect(baseElement).toBeTruthy();
  });
});
